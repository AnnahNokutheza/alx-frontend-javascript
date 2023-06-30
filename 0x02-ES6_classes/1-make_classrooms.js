import ClassRoom from './0-classroom';

const ClassRoomList = [];

export default function initializeRooms() {
 /* eslint-disable */
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  // Check if each ClassRoom instance has the correct max student size
  if (class1.getMaxStudents() !== 19 || class2.getMaxStudents() !== 20 || class3.getMaxStudents() !== 34) {
    throw new Error('Incorrect max student size');
  }

  ClassRoomList.push(class1, class2, class3);

  // Check if the returned array has exactly three ClassRoom instances
  if (ClassRoomList.length !== 3) {
    throw new Error('Incorrect number of ClassRoom instances');
  }

  return ClassRoomList;
}
