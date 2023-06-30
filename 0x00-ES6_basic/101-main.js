import createIteratorObject, { iterateThroughObject } from './101-iterateThroughObject.js';

const report = {
  allEmployees: {
    engineering: [
      'John Doe',
      'Guillaume Salva',
    ],
    // ...
  },
};

const iterator = createIteratorObject(report);
const result = iterateThroughObject(iterator);
console.log(result);

