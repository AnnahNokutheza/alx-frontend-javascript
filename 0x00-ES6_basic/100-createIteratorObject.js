export default function createIteratorObject(report) {
  let departments = Object.values(report);
  let employees = [];

  for (let department of departments) {
    employees.push(...department);
  }

  let index = 0;

  return {
    next: function() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}
