export default function createIteratorObject(report) {
  /* eslint-disable */
  const departments = Object.values(report);
  const employees = [];

  for (const department of departments) {
    employees.push(...department.map(employee => employee.name));
  }

  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        const name = employees[index++];
        return { value: name, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

