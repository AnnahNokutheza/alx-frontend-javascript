import createIteratorObject, { iterateThroughObject } from './yourFilename.js';

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

