export default function getStudentIdSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
