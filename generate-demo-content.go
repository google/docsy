package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"path/filepath"
	"strings"
	"time"

	blackfriday "v/github.com/russross/blackfriday@v1.5.1"
)

type titles struct {
	t1 string
	t2 string
}

type siteData struct {
	dir                 string
	pageTemplate        string
	sectionTemplate     string
	mainSectionTemplate string

	sections    []titles
	subSections []titles

	titleLeads    []string
	titlePrefixes []string
	titleSuffixes []string
}

type testpageBuilder struct {
	dir       string
	startDate time.Time
	seen      map[string]bool
	titleFn   func(s string) string
}

func newTestpageBuilder(dir string) *testpageBuilder {
	startDate, _ := time.Parse("2006-01-02", "2017-01-01")
	return &testpageBuilder{dir: dir, startDate: startDate, seen: make(map[string]bool)}
}

func (t *testpageBuilder) getContentFromFile(name string) string {
	filename := filepath.Join(t.dir, "testdata", name)
	c, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
	}
	return string(c)
}

func (t *testpageBuilder) createPage(data siteData, title, linkTitle string, i int) string {
	title = t.titleFn(title)
	linkTitle = t.titleFn(linkTitle)
	frontmatter := fmt.Sprintf(data.pageTemplate, title, linkTitle, t.startDate.Add(time.Duration(i*24)*time.Hour).Format("2006-01-02"))

	return frontmatter + t.getContentFromFile("doc-article.md")
}

func (t *testpageBuilder) createSectionPage(data siteData, title, linkTitle string, i int) string {
	title = t.titleFn(title)
	linkTitle = t.titleFn(linkTitle)
	return fmt.Sprintf(data.sectionTemplate, title, linkTitle, t.startDate.Add(time.Duration(i*24)*time.Hour).Format("2006-01-02"))
}

func (t *testpageBuilder) createMainSectionPage(data siteData, title, linkTitle string, i int) string {
	title = t.titleFn(title)
	linkTitle = t.titleFn(linkTitle)
	return fmt.Sprintf(data.mainSectionTemplate, title, linkTitle, i, i)
}

func (t *testpageBuilder) buildSections() error {
	var enData = siteData{
		dir:                 "content/en/docs",
		pageTemplate:        pageTemplateEn,
		sectionTemplate:     sectionTemplateEn,
		mainSectionTemplate: mainSectionTemplateEn,
		sections:            []titles{titles{"Big Data", "Big Data in Small Disks"}, titles{"API Reference", "Full API Reference"}, titles{"Cloud Computing", "Computing in the cloud"}, titles{"Content Management", "Content Management"}, titles{"Cross-Platform", "Cross-Platform"}},
		subSections:         []titles{titles{"Examples", "Examples in Code"}, titles{"Tutorials", "Step by step tutorials"}},
		titleLeads:          []string{"In depth", "The Math of", "The inside of"},
		titlePrefixes:       []string{"Recursion", "Cryptography", "Monographs", "Java", "Go", "Monoliths", "Microservices"},
		titleSuffixes:       []string{"The Core Concepts", "How does it work?", "The Inner Workings", "Detailed Spec"},
	}

	var noData = siteData{
		dir:                 "content/no/docs",
		pageTemplate:        pageTemplateNo,
		sectionTemplate:     sectionTemplateNo,
		mainSectionTemplate: mainSectionTemplateNo,
		sections:            []titles{titles{"Big Data", "Store mengder data"}, titles{"API-referanse", "Komplett API-referance"}, titles{"Sky-data", "Data i skyen"}, titles{"Innholdshåndtering", "Håndtering av innhold"}, titles{"Flerplattform", "Flere plattformer"}},
		subSections:         []titles{titles{"Eksempler", "Praktiske eksempler"}, titles{"Hjelpeartikler", "Steg for steg hjelpeartikler"}},
		titleLeads:          []string{"Detaljert om", "Matten til", "Innsiden av"},
		titlePrefixes:       []string{"rekursjon", "kryptografi", "monografer", "Java", "Go", "monolitter", "mikroservicer"},
		titleSuffixes:       []string{"De grunnleggende konseptene", "Hvordan virker det?", "Drivverket", "Detaljert spesifikasjon"},
	}

	t.titleFn = strings.Title

	docSectionContent := t.createMainSectionPage(enData, "TechOS Documentation", "Documentation", 20)
	if err := t.writeContent(docSectionContent, filepath.Join(enData.dir, "_index.md")); err != nil {
		return err
	}

	docSectionContent = t.createMainSectionPage(noData, "TechOS-dokumentasjon", "Dokumentasjon", 20)
	if err := t.writeContent(docSectionContent, filepath.Join(noData.dir, "_index.md")); err != nil {
		return err
	}

	if err := t.buildSectionsFor(enData, enData); err != nil {
		return err
	}

	t.titleFn = func(s string) string {
		return s

	}
	return t.buildSectionsFor(enData, noData)
}

func (t *testpageBuilder) buildSectionsFor(master, data siteData) error {
	rand.Seed(int64(32))
	for i, sect := range data.sections {
		masterSect := master.sections[i]
		dir := blackfriday.SanitizedAnchorName(masterSect.t1)
		dir = filepath.Join(data.dir, dir)
		pageContent := t.createSectionPage(data, sect.t2, sect.t1, i)
		if err := t.writeContent(pageContent, filepath.Join(dir, "_index.md")); err != nil {
			return err
		}

		must(t.buildPages(master, data, dir, sect, i))

		numSubSections := rand.Intn(len(data.subSections))
		for j := 0; j <= numSubSections; j++ {
			si := rand.Intn(len(data.subSections))
			masterSubSect := master.subSections[si]
			subsect := data.subSections[si]
			subdir := blackfriday.SanitizedAnchorName(masterSubSect.t1)
			subdir = filepath.Join(dir, subdir)
			pageContent := t.createSectionPage(data, subsect.t2, subsect.t1, i+j)
			must(t.buildPages(master, data, subdir, subsect, i+j))
			indexFilename := filepath.Join(subdir, "_index.md")
			if err := t.writeContent(pageContent, indexFilename); err != nil {
				return err
			}

		}
	}

	return nil
}

func (t *testpageBuilder) buildPages(master, data siteData, dir string, sect titles, i int) error {
	if t.seen[dir] {
		return nil
	}
	t.seen[dir] = true

	numPagesInSection := rand.Intn(len(data.titlePrefixes))
	for j := 0; j <= numPagesInSection; j++ {
		i1, i2, i3 := rand.Intn(len(data.titleLeads)), rand.Intn(len(data.titlePrefixes)), rand.Intn(len(data.titleSuffixes))
		linkTitle := data.titleLeads[i1] + " " + data.titlePrefixes[i2]
		title := linkTitle + ": " + data.titleSuffixes[i3]
		name := blackfriday.SanitizedAnchorName(master.titleLeads[i1] + " " + master.titlePrefixes[i2] + ":" + master.titleSuffixes[i3])
		pageContent := t.createPage(data, title, linkTitle, i+j)
		if err := t.writeContent(pageContent, filepath.Join(dir, fmt.Sprintf("%s.md", name))); err != nil {
			return err
		}
	}

	return nil

}

func (t *testpageBuilder) writeContent(content, name string) error {
	filename := filepath.Join(t.dir, name)
	dir := filepath.Dir(filename)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return err
	}
	return ioutil.WriteFile(filename, []byte(content), 0755)
}

func main() {
	dir, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Building test content in", dir)
	//must(os.RemoveAll(filepath.Join(dir, docsDir)))
	builder := newTestpageBuilder(dir)
	must(builder.buildSections())

}

func must(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

const (
	sectionTemplateEn = `
---
title: %q
linkTitle: %q
date: %s
description: >
  A short lead descripton about this section page. Text here can also be **bold** or _italic_ and can even be split over multiple paragraphs.
---

This is the section landing page.

* Summarize
* Your section
* Here

`

	mainSectionTemplateEn = `
---
title: %q
linkTitle: %q
weight: %d
menu:
  main:
    weight: %d
---

This is a landing page for a top level section.

* Summarize
* Your section
* Here


`
	pageTemplateEn = `
---
title: %q
linkTitle: %q
date: %s
description: >
  A short lead descripton about this content page. It can be **bold** or _italic_ and can be split over multiple paragraphs.
---

`

	sectionTemplateNo = `
---
title: %q
linkTitle: %q
date: %s
description: >
  En kort oppsummering av denne siden. Tekst kan **utheves** sller skrives i _kursiv_ og kan ha flere avsnitt.
---

Dette er landingssiden til en seksjon et sted nede i seksjonshierarkiet.

* Oppsummer
* Seksjonen din
* Her


`

	mainSectionTemplateNo = `
---
title: %q
linkTitle: %q
weight: %d
menu:
  main:
    weight: %d
---

Dette er landingssiden til en seksjon på øverste nivå.

* Oppsummer
* Seksjonen din
* Her


`
	pageTemplateNo = `
---
title: %q
linkTitle: %q
date: %s
description: >
 En kort oppsummering av denne siden. Tekst kan **utheves** sller skrives i _kursiv_ og kan ha flere avsnitt.
---

`
)
