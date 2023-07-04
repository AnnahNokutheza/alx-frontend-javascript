// The reduce method works with two functions called accumulator and current
// The current value should be 0 by default
// The accumulator adds upp all the specified valued
export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, cur) => acc + cur.id, 0);
}const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;
