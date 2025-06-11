# JavaScript Module Examples

Most of the examples in this section use the same input data:

```js
const myCars = [
  {
    car: 'Audi',
    price: 40000,
    color: 'blue',
  },
  {
    car: 'BMW',
    price: 35000,
    color: 'black',
  },
  {
    car: 'Porsche',
    price: 60000,
    color: 'green',
  },
];
```

## Example `fields` option

```js
{
  fields: [
    // Supports pathname -> pathvalue
    'simplepath', // equivalent to {value:'simplepath'}
    'path.to.value' // also equivalent to {value:'path.to.value'}

    // Supports label -> simple path
    {
      label: 'some label', // Optional, column will be labeled 'path.to.something' if not defined)
      value: 'path.to.something', // data.path.to.something
      default: 'NULL' // default if value is not found (Optional, overrides `defaultValue` for column)
    },

    // Supports label -> derived value
    {
      label: 'some label', // Optional, column will be labeled with the function name or empty if the function is anonymous
      value: (row, field) => row[field.label].toLowerCase() ||field.default,
      default: 'NULL' // default if value function returns null or undefined
    },

    // Supports label -> derived value
    {
      value: (row) => row.arrayField.join(',')
    },

    // Supports label -> derived value
    {
      value: (row) => `"${row.arrayField.join(',')}"`
    },
  ]
}
```

## Default parsing

```js
const { Parser } = require('json2csv');

const json2csvParser = new Parser();
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"car","price","color"
"Audi",40000,"blue"
"BMW",35000,"black"
"Porsche",60000,"green"
```

## Specify fields to parse

```js
const { Parser } = require('json2csv');
const fields = ['car', 'color'];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"car","color"
"Audi","blue"
"BMW","black"
"Porsche","green"
```

## Use custom headers

```js
const { Parser } = require('json2csv');

const fields = [
  {
    label: 'Car Name',
    value: 'car',
  },
  {
    label: 'Price USD',
    value: 'price',
  },
];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"Car Name","Price USD"
"Audi",40000
"BMW",35000
"Porsche",60000
```

## Parse nested properties

You can specify nested properties using dot notation.

```js
const { Parser } = require('json2csv');

const myCars = [
  {
    car: { make: 'Audi', model: 'A3' },
    price: 40000,
    color: 'blue',
  },
  {
    car: { make: 'BMW', model: 'F20' },
    price: 35000,
    color: 'black',
  },
  {
    car: { make: 'Porsche', model: '9PA AF1' },
    price: 60000,
    color: 'green',
  },
];

const fields = ['car.make', 'car.model', 'price', 'color'];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"car.make", "car.model", "price", "color"
"Audi", "A3", 40000, "blue"
"BMW", "F20", 35000, "black"
"Porsche", "9PA AF1", 60000, "green"
```

## Use a custom delimiter

For example, to create tsv files

```js
const { Parser } = require('json2csv');

const json2csvParser = new Parser({ delimiter: '\t' });
const tsv = json2csvParser.parse(myCars);

console.log(tsv);
```

will output to console

```
"car" "price" "color"
"Audi"  10000 "blue"
"BMW" 15000 "red"
"Mercedes"  20000 "yellow"
"Porsche" 30000 "green"
```

If no delimiter is specified, the default `,` is used.

## Use custom formatting

For example, you could use `*` as quotes and format numbers to always have 2 decimals and use `,` as separator.
To avoid conflict between the number separator and the CSV delimiter, we can use a custom delimiter again.

```js
const {
  Parser,
  formatters: { string: stringFormatter, number: numberFormatter },
} = require('json2csv');

const json2csvParser = new Parser({
  delimiter: ';',
  formatters: {
    string: stringFormatter({ quote: '*' }),
    number: numberFormatter({ separator: ',', decimals: 2 }),
  },
});
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
*car*;*price*;*color*
*Audi*;40000,00;*blue*
*BMW*;35000,00;*black*
*Porsche*;60000,00;*green*
```

## Format the headers differently

For example, you can not quote the headers.

```js
const { Parser } = require('json2csv');

const json2csvParser = new Parser({
  formatters: {
    header: stringFormatter({ quote: '' },
  },
});
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
car, price, color
"Audi",40000,"blue"
"BMW",35000,"black"
"Porsche",60000,"green"
```

## Unwind arrays

You can unwind arrays similar to MongoDB's \$unwind operation using the `unwind` transform.

```js
const {
  Parser,
  transforms: { unwind },
} = require('json2csv');

const myCars = [
  {
    carModel: 'Audi',
    price: 0,
    colors: ['blue', 'green', 'yellow'],
  },
  {
    carModel: 'BMW',
    price: 15000,
    colors: ['red', 'blue'],
  },
  {
    carModel: 'Mercedes',
    price: 20000,
    colors: 'yellow',
  },
  {
    carModel: 'Porsche',
    price: 30000,
    colors: ['green', 'teal', 'aqua'],
  },
];

const fields = ['carModel', 'price', 'colors'];
const transforms = [unwind({ paths: ['colors'] })];

const json2csvParser = new Parser({ fields, transforms });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"carModel","price","colors"
"Audi",0,"blue"
"Audi",0,"green"
"Audi",0,"yellow"
"BMW",15000,"red"
"BMW",15000,"blue"
"Mercedes",20000,"yellow"
"Porsche",30000,"green"
"Porsche",30000,"teal"
"Porsche",30000,"aqua"
```

## Unwind of nested arrays

You can also unwind arrays multiple times or with nested objects.

```js
const {
  Parser,
  transforms: { unwind },
} = require('json2csv');

const myCars = [
  {
    carModel: 'BMW',
    price: 15000,
    items: [
      {
        name: 'airbag',
        color: 'white',
      },
      {
        name: 'dashboard',
        color: 'black',
      },
    ],
  },
  {
    carModel: 'Porsche',
    price: 30000,
    items: [
      {
        name: 'airbag',
        items: [
          {
            position: 'left',
            color: 'white',
          },
          {
            position: 'right',
            color: 'gray',
          },
        ],
      },
      {
        name: 'dashboard',
        items: [
          {
            position: 'left',
            color: 'gray',
          },
          {
            position: 'right',
            color: 'black',
          },
        ],
      },
    ],
  },
];

const fields = [
  'carModel',
  'price',
  'items.name',
  'items.color',
  'items.items.position',
  'items.items.color',
];
const transforms = [unwind({ paths: ['items', 'items.items'] })];
const json2csvParser = new Parser({ fields, transforms });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"carModel","price","items.name","items.color","items.items.position","items.items.color"
"BMW",15000,"airbag","white",,
"BMW",15000,"dashboard","black",,
"Porsche",30000,"airbag",,"left","white"
"Porsche",30000,"airbag",,"right","gray"
"Porsche",30000,"dashboard",,"left","gray"
"Porsche",30000,"dashboard",,"right","black"
```

## Unwind array blanking the repeated fields

You can also unwind arrays blanking the repeated fields.

```js
const {
  Parser,
  transforms: { unwind },
} = require('json2csv');

const myCars = [
  {
    carModel: 'BMW',
    price: 15000,
    items: [
      {
        name: 'airbag',
        color: 'white',
      },
      {
        name: 'dashboard',
        color: 'black',
      },
    ],
  },
  {
    carModel: 'Porsche',
    price: 30000,
    items: [
      {
        name: 'airbag',
        items: [
          {
            position: 'left',
            color: 'white',
          },
          {
            position: 'right',
            color: 'gray',
          },
        ],
      },
      {
        name: 'dashboard',
        items: [
          {
            position: 'left',
            color: 'gray',
          },
          {
            position: 'right',
            color: 'black',
          },
        ],
      },
    ],
  },
];

const fields = [
  'carModel',
  'price',
  'items.name',
  'items.color',
  'items.items.position',
  'items.items.color',
];
const transforms = [
  unwind({ paths: ['items', 'items.items'], blankOut: true }),
];

const json2csvParser = new Parser({ fields, transforms });
const csv = json2csvParser.parse(myCars);

console.log(csv);
```

will output to console

```
"carModel","price","items.name","items.color","items.items.position","items.items.color"
"BMW",15000,"airbag","white",,
,,"dashboard","black",,
"Porsche",30000,"airbag",,"left","white"
,,,,"right","gray"
,,"dashboard",,"left","gray"
,,,,"right","black"
```
