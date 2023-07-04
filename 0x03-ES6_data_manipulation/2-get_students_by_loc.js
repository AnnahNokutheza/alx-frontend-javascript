import getStudentsByLocation from './your-module';

function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
