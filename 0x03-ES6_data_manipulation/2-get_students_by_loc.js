function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

// Assuming getListStudents is defined and returns an array of students
function getListStudents() {
  // Replace this with your implementation to fetch or generate the list of students
  // For demonstration purposes, we'll return a sample array of students
  return [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Eve' }
  ];
}

const students = getListStudents();
const sumOfIds = getStudentIdsSum(students);
console.log(sumOfIds);
