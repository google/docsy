---

date: 2018-06-14T12:14:47+01:00
tags:
- Go
title: Unsafe Go Strings
slug: unsafe-go-strings
description: Go is the Ferrari of programming languages. But there are occasional friction that may lure you into unsafe terrain.
author: Bjørn Erik Pedersen
---

**Go is the Ferrari of programming languages. But there are occasional friction that may lure you into unsafe terrain.**

<!--more-->

With emphasis on *may*. This is not an advice, but more a demonstration of some of the interesting dark alleys in Go City.

## Safe and Unsafe

Two examples which, looking at the signature, seems to do the same:

``` go
func SafeBytesToString(b []byte) string {
	return string(b)
}

func UnsafeBytesToString(b []byte) string {
	return *(*string)(unsafe.Pointer(&b))
}
```
Both take a byte-slice, `[]byte`, and return a `string`.

Given these benchmarks[^benchmarks]:

``` go
func BenchmarkSafeBytesToString(b *testing.B) {
	var (
		bt = []byte("The quick brown fox jumps over the lazy dog.")
		s  string
	)

	for i := 0; i < b.N; i++ {
		s = SafeBytesToString(bt)
	}
	
	s = s[:]
}

func BenchmarkUnsafeBytesToString(b *testing.B) {
	var (
		bt = []byte("The quick brown fox jumps over the lazy dog.")
		s  string
	)

	for i := 0; i < b.N; i++ {
		s = UnsafeBytesToString(bt)
	}

	s = s[:]
}
```

And run these with:

`go test -test.run=NONE -bench=".*" -test.benchmem=true ./unsafestrings`

```bash
BenchmarkSafeBytesToString-4  30000000  47.7 ns/op  48 B/op	  1 allocs/op
BenchmarkUnsafeBytesToString-4   2000000000  1.04 ns/op  0 B/op	  0 allocs/op
```
The unsafe variant is fast as lightning -- and no memory allocation! 

And I think it is safe to say that it's not unsafe as in *it will suddenly stop working* in a future Go version. It is in heavy use on GitHub, as shown in this query against Google's smaller sample data set:[^github-bigdata]

```sql
SELECT
  SUM(copies)
FROM
  [bigquery-public-data:github_repos.sample_contents]
WHERE
  NOT binary
  AND content CONTAINS '*(*string)(unsafe.Pointer'
  AND sample_path LIKE '%.go'
  ```
  
  **The query above currently finds 2275 matches.**

## Bytes They Are a Changin

`unsafe.Pointer` lives in the package that spells danger. You are on your own without seat belts: Behaviour may change from Go version to the next and there are no guarantees that it behaves the same on different platforms.

But it is tempting in some rare cases to get rid of those memory allocations and reduce garbage collection.

A regular `string` (`s := "Hello World!"`) in Go is immutable -- it will never change. If we revisit the two functions earlier: What happens if the original byte slice changes?

Both tests run without error:

``` go
var testString = "The quick brown fox jumps over the lazy dog."

func TestSafeBytesToString(t *testing.T) {
	var (
		b = []byte(testString)
		s = SafeBytesToString(b)
	)

	if s != testString {
		t.Errorf("Expected '%s' was '%s'", testString, s)
	}

	b[0] = byte('S')

	if s == string(b) {
		t.Errorf("Expected '%s' was '%s'", b, s)
	}
}

func TestUnsafeBytesToString(t *testing.T) {
	var (
		b = []byte(testString)
		s = UnsafeBytesToString(b)
	)

	if s != testString {
		t.Errorf("Expected '%s' was '%s'", testString, s)
	}

	b[0] = byte('S')

	if s != string(b) {
		t.Errorf("Expected '%s' was '%s'", string(b), s)
	}
}
```

The *unsafe string* has changed in line with the byte slice.

This is fine if this is what you want and expect, but it can be a major surprise if you don't.

**Mutable objects are a big contributor in the bug department.**

## Search and Replace

I will leave it up to the reader to find practical use cases for this, but I will spend some time investigating *text search and replace*, a common problem.

In the Go stdlib there are both a `strings` and a `bytes` package. Two packages that seem to be mostly duplicates was probably a mistake by the Go language designers, but that is another and bigger discussion. 

There is, however, one nice feature in `strings` that does not exist in the `bytes` mirror: The `strings.Replacer`. 

I created the GitHub issue [bytes: add Replacer](https://github.com/golang/go/issues/9905) last winter, and while it got several "I want this" and "we should do this" from core Go people, it eventually got rejected -- because doing it the effective way, by changing the input byte slice, would make it different from the `strings` alternative.

That is a pity, because `strings.Replacer` is really fast and really useful.

And testing if the `strings` version is worth using for `byte` slices:

``` go
type appendSliceWriter []byte

func (w *appendSliceWriter) Write(p []byte) (int, error) {
	*w = append(*w, p...)
	return len(p), nil
}

func (w *appendSliceWriter) WriteString(s string) (int, error) {
	*w = append(*w, s...)
	return len(s), nil
}

func BenchmarkUnsafeStringsReplacer(b *testing.B) {
	var (
		by = []byte("The quick brown fox jumps over the lazy dog.")
		re = strings.NewReplacer("quick", "slow", "brown", "blue", "lazy", "energetic")
	)

	buf := make(appendSliceWriter, 0, len(by))

	for i := 0; i < b.N; i++ {
		re.WriteString(&buf, UnsafeBytesToString(by))
		if UnsafeBytesToString(buf) !=
			"The slow blue fox jumps over the energetic dog." {
			b.Fatalf("Failed replacement")
		}
		buf = buf[:0] // reuse
	}
}

func BenchmarkSafeStringsReplacer(b *testing.B) {
	var (
		by = []byte("The quick brown fox jumps over the lazy dog.")
		re = strings.NewReplacer("quick", "slow", "brown", "blue", "lazy", "energetic")
	)

	buf := make(appendSliceWriter, 0, len(by))

	for i := 0; i < b.N; i++ {

		re.WriteString(&buf, SafeBytesToString(by))
		if UnsafeBytesToString(buf) !=
			"The slow blue fox jumps over the energetic dog." {
			b.Fatalf("Failed replacement")
		}
		buf = buf[:0]
	}
}

func BenchmarkMultipleBytesReplace(b *testing.B) {
	by := []byte("The quick brown fox jumps over the lazy dog.")

	for i := 0; i < b.N; i++ {
		var replaced []byte

		replaced = bytes.Replace(by, []byte("quick"), []byte("slow"), -1)
		replaced = bytes.Replace(replaced, []byte("brown"), []byte("blue"), -1)
		replaced = bytes.Replace(replaced, []byte("lazy"), []byte("energetic"), -1)

		if UnsafeBytesToString(replaced) != "The slow blue fox jumps over the energetic dog." {
			b.Fatalf("Failed replacement")
		}
	}
}

func BenchmarkMultiplesStringsReplace(b *testing.B) {
	s := "The quick brown fox jumps over the lazy dog."

	for i := 0; i < b.N; i++ {
		var replaced string

		replaced = strings.Replace(s, "quick", "slow", -1)
		replaced = strings.Replace(replaced, "brown", "blue", -1)
		replaced = strings.Replace(replaced, "lazy", "energetic", -1)

		if replaced != "The slow blue fox jumps over the energetic dog." {
			b.Fatalf("Failed replacement")
		}
	}
}
```

Running the benchmarks above:

```bash
BenchmarkUnsafeStringsReplacer-4  5000000  254 ns/op  0 B/op  0 allocs/op
BenchmarkSafeStringsReplacer-4  5000000  290 ns/op  48 B/op  1 allocs/op
BenchmarkMultipleBytesReplace-4  3000000  407 ns/op  144 B/op  3 allocs/op
BenchmarkMultiplesStringsReplace-4  2000000  637 ns/op  288 B/op  6 allocs/op
```
 
The above tries to demonstrate using the `strings.Replace` for `byte` slices both in a safe and unsafe way, and then doing the same replacements with the `bytes.Replace` and `strings.Replace` functions.

The numbers speak for themselves, but `strings.Replace` is very effective when you have a fixed set of replacements, and if you really care about memory allocations, using it for `byte` slices may be an option.

The example above also shows two peculiar features in Go: interface-upgrades and that `append(bytesBuff, aString...)` is "free" in the memory department:

* `replacer.WriteString`accepts an `io.Writer`, but will be upgraded internally to a `stringWriterIface` if  `WriteString(s string)` is implemented.
* `appendSliceWriter.WriteString(s string)` then exploits a special case in _Go_:

Given these two benchmarks:

``` go
func BenchmarkAppendString(b *testing.B) {
	var (
		buf  = make([]byte, 0, 100)
		buf2 []byte
		s    = "bepsays"
	)

	for i := 0; i < b.N; i++ {
		buf2 = append(buf, s...)
	}
	buf2 = buf2[:]
}

func BenchmarkAppendByteString(b *testing.B) {
	var (
		buf  = make([]byte, 0, 100)
		buf2 []byte
		s    = "bepsays"
	)

	for i := 0; i < b.N; i++ {
		buf2 = append(buf, []byte(s)...)
	}
	buf2 = buf2[:]
}
```

This result may come as a surprise:

```bash
BenchmarkAppendString-4  500000000  3.09 ns/op   0 B/op   0 allocs/op
BenchmarkAppendByteString-4   100000000  13.0 ns/op  0 B/op  0 allocs/op
```
Note that the neither expansion of the `string` using the `...` to a `byte` slice in the `append`, the regular `[]byte(s)` conversion or the `append` itself cost any memory allocation. Which is mighty impressive and indicates more than one special trick from the people who wrote the Go compiler.

A good resource if you want to do fancy slice manipulation is [SliceTricks](https://github.com/golang/go/wiki/SliceTricks) on the Golang Wiki.



[^benchmarks]: All the benchmarks have been executed with Go 1.7.1 on a MacBook 2.7 i5 dual core. Runnable versions can be found on [github.com/bep/gosandbox/unsafestrings](https://github.com/bep/gosandbox/tree/master/unsafestrings).
[^github-bigdata]: GitHub's BigQuery: https://bigquery.cloud.google.com/dataset/bigquery-public-data:github_repos
