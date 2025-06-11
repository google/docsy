# [libs](/libs/)/[shared](/libs/shared/)/src/crdt

## CRDT

### Introduction

CRDT, short for [conflict-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type), is a data structure and merge algorithm that allows multiple clients to modify independent copies of the data structure concurrently. Using the merge algorithm, all conflicts between the clients modifications of the data are resolved in a way that **all clients eventually end up with the same state of the data**.

Our CRDT implementation is mainly focused on JSON objects and built around supporting the data structure exibited by our chart metadata.

### Concepts, Interface & Classes

Below a high level overview of some of the concepts, as well as interfaces and classes used in our CRDT implementation is provided.

#### (Logical) Timestamp

A Logical Timestamp, also called [Lamport Timestamp](https://en.wikipedia.org/wiki/Lamport_timestamp) or Logical Clock, is a timestamp that is used to order events in a distributed system. It's not a timestamp in the usual sense (i.e. representing a real point in time) but rather a number (or similar) that is monotonically increasing, i.e. only goes up. Given that Logical timestamps created by different systems are unique, they allow to create a [total order](https://en.wikipedia.org/wiki/Total_order) of events.

In our CRDT implementation the timestamps have the format `{nodeId}-{counter}`, where `nodeId` is a unique identifier for the client and `counter` is a monotonically increasing number. Since all clients have their own unique `nodeId`, the timestamps are unique across all clients.

To order the timestamps we define a compare function:

<<< @/libs/shared/src/crdt/Clock.ts#compare

A timestamp is considered _newer_ than another timestamp if either the `counter` is higher **or** the `counter` is the same **and** the `nodeId` is higher.

Note that we refer to the instance of such an object as `Clock` while the stringified representation is called `Timestamp`.

#### CRDT Interface

The [CRDT interface](https://github.com/datawrapper/code/blob/main/libs/shared/src/crdt/CRDT.ts) is the interface for all CRDT implementations. It defines the basic methods that a CRDT implementation must define and these are actually just four:

<<< @/libs/shared/src/crdt/CRDT.ts#CRDT

1. The `calculateDiff` method takes in an updated version of the CRDT's data and returns a diff object that represents the changes that need to be applied to the CRDT to get to the new state. For example, for a JSON object CRDT that currently holds `{ a: 1, b: 2 }` and is updated with `{ a: 1, b: 3 }`, the diff object would be `{ b: 3 }`.

2. The `createUpdate` method takes in a `diff` object and returns an `update` object that contains the `diff` and a `timestamp` that represents the logical timestamp that is necessary to fully apply the diff on this instance of the CRDT. The `timestamp` is used to resolve conflicts between updates from different clients.

3. The `applyUpdate` method takes in an `update` object (as created by another client) and applies the changes from the `diff` object to the CRDT, but only for those values where the `timestamp` of the `update` is greater than the `timestamp` of the CRDT.

4. The `data` method returns the current data of the CRDT, but transforms back any structural changes made to enable the conflict resolution (e.g. alternative item array representations).

#### BaseJsonCRDT

The `BaseJsonCRDT` implements the core functionality of the CRDT for JSON objects. It does not implement the `CRDT` interface itself in that it does not keep track of a `Clock` internally, but it exposes functionality that is used by the `JsonCRDT` class.

The most important method is the `update(diff, timestamp)` method which updates the CRDT with the given data `diff` and `timestamp`. Besides this and the `data()` method, it mainly consists of methods that handle different kinds of update operations, e.g., `updateObject(...)`, `updateValue(...)`. Another important method is the `calculateDiff` method which calculates the diff between two states of data.

Via a `setDebug(true)` the class can be configured to log updates and individual _applied_ and _rejected_ mutations of the CRDT. These logs can then be accessed via `getDebugHistory()` or logged via `printDebugHistory()`. It's also possible to specifiy a debug level (`'updates', 'mutations', 'all'`) to limit or extend the amount of data captured. Note that this functionality comes with performance overhead and should only be used for debugging purposes.

#### JsonCRDT

The `JsonCRDT` builds a wrapper around the `BaseJsonCRDT` and implements the `CRDT` interface. It keeps track of a `Clock` and uses it to assign timestamps for self-generated updates via the `createUpdate` method.

#### SimpleCRDT

The `SimpleCRDT` is a wrapper around the `JsonCRDT` that itself implements the CRDT interface. It is used to manage single values, e.g., strings.
Internally, it just delegates calls to the `JsonCRDT` while creating a JSON object with a single key-value pair:

```
{ value: string }
```

#### Item Arrays

Item Arrays are not a class but an important concept in our CRDT implementation. They are used to manage arrays of objects in a non-atomic way. Meaning each object in the array can be updated independently and concurrently by different clients and the results are merged via the CRDT merge algorithm.

Normal arrays are atomic. The the following example that means, depending on the timestamp of the updates the final result for both client will **always** be one of the updates, **never** a merge of both updates:

::: code-group

```json [Regular arrays]
// Base data:
[{ a: 1 }]

// Client A updates it to:
[{ a: 1 }, { b: 2 }] // [!code ++]

// At the same time client B updates it to:
[{ a: 1 }, { c: 3 }] // [!code ++]

// The result will be one of the updates:
[{ a: 1 }, { b: 2 }] // [!code highlight]
[{ a: 1 }, { c: 3 }] // [!code highlight]

// Never a merge of both:
[{ a: 1 }, { b: 2 }, { c: 3 }]  // [!code error]
```

:::

To solve this issue, item arrays are used. To create an item array, each object in the array needs a unique id via an `id` key. This allows to internally convert the array to an object where the keys are the `id`s and the values are the objects. This way, each object in the array can be updated independently and concurrently by different clients and the results are merged via the CRDT merge algorithm.
Additionally, the order of the item array items is defined by an artificial `_index` property that is added to each object in the array.

::: code-group

```json [Item arrays]
// Base data:
[
    { id: "a", value: 1 },
    { id: "b", value: 2 }
]

// Internally represented as:
{
     a: { id: "a", value: 1, _index: 0 },
     b: { id: "b", value: 2, _index: 1 }
}

// Client A updates it to:
[
    { id: "a", value: 1 },
    { id: "b", value: 2 },
    { id: "c", value: 3 }, // [!code ++]
]

// At the same time client B updates it to:
[
    { id: "a", value: 1 },
    { id: "b", value: 2 },
    { id: "d", value: 4 }, // [!code ++]
]

// The result will be a merge of both arrays:
[
    { id: "a", value: 1 },
    { id: "b", value: 2 },
    { id: "d", value: 3 }, // [!code highlight]
    { id: "c", value: 4 }, // [!code highlight]
]

// Internally represented as:
{
     a: { id: "a", value: 1, _index: 0 },
     b: { id: "b", value: 2, _index: 1 },
     c: { id: "c", value: 3, _index: 2 }, // [!code highlight]
     d: { id: "d", value: 4, _index: 2 }, // [!code highlight]
}
```

:::

Note that `_index` is `2` for the `c` and `d` object, because for the two clients, they were both added at the third position at the time. To infer the correct order of the items, the timestamp is used as a tie breaker for the `_index` property, so the item array item with the higher timestamp gets the actual `2` index while the other is placed at the index position `3`, i.e., is placed right behind it.

Another difference of item arrays compared to regular elements in the CRDT is that **items of an item array are deleted forever**. While the deletion of a normal field in a JSON object is just a change of the value to `undefined`, that can be undone by setting the value to any other value with a higher timestamp, the deletion of an item array item is a permanent deletion. To achieve this, the item in an item array is marked with `_index=null`, and all further updates to this specific item `_index` value are ignored, no matter their timestamp value, are ignored.

### Tests

As the CRDT is a very important library for the app it is covered by an extensive test suite.
There are two types of tests: unit tests and a fuzz test.

#### Unit Tests

To run the unit tests, simply run:

```sh
# /libs/shared
pnpm run test:crdt
```

#### Fuzz Test

Since the amount of edge cases is enormous the unit tests are supplemented with a [fuzz test](https://en.wikipedia.org/wiki/Fuzzing).
The fuzz test generates randomized test data and then performs random operations on the test data with various CRDT instances.
Finally, all updates from the CRDT instances are shuffled and merged. Their final state is then asserted to be equal.
This way, the fuzz test can find edge cases that are not covered by the unit tests.
While this confirms that the CRDT is working as expected in terms of achieving [Strong Eventual Concistency](https://en.wikipedia.org/wiki/Eventual_consistency#Strong_eventual_consistency) it does not guarantee that the state the CRDT is converging to is the desired state - that for what we rely on the unit tests.

The fuzz test can be run with:

```sh
# /libs/shared
pnpm run fuzz
```

Note that the fuzz test can take up to a few minutes to finish.
The following additional arguments can be used:

-   `--runs <number>`: The number of runs the fuzz test should perform. Default is 10.
-   `--primitiveToObject`: If set, the fuzz test will also test the (currently unstable) functionality for conversion of primitive values to objects. Default is false.
-   `--objectToPrimitive`: If set, the fuzz test will also test the (currently unstable) functionality for conversion of objects to primitive values. Default is false.

To pass additional arguments to the fuzz test, use the following syntax:

```sh
# /libs/shared
pnpm run fuzz -- --runs 1
```
