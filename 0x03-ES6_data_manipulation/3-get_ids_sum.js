// The reduce method works with two functions called accumulator and current
// The current value should be 0 by default
// The accumulator adds upp all the specified valued
export default function getStudentIdsSum(students) {
  return students.reduce((acc, c) => acc + c.id, 0);
}
