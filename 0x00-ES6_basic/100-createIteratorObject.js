export default function createIteratorObject(report) {
  /* eslint-disable */
  let departments = Object.values(report);
  let employees = [];

  for (let department of departments) {
    employees.push(...department);
  }

  let index = 0;

  return {
    next: function() {
      if (index < employees.length) {
        const name = employees[index++].name;
        return { value: name, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

