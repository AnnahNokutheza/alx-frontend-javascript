import getStudentsByLocation from './your-module';

const students = [
  { name: 'John', location: 'New York' },
  { name: 'Alice', location: 'Los Angeles' },
  { name: 'Bob', location: 'New York' },
  { name: 'Eve', location: 'San Francisco' }
];

const filteredStudents = getStudentsByLocation(students, 'New York');
console.log(filteredStudents);
