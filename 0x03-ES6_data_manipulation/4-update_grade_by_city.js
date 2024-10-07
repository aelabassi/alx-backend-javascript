export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsByCity = students.filter((student) => student.location === city);

  const gradedStudents = studentsByCity.map((student) => {
    for (const grade of newGrade) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade; // eslint-disable-line
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line
    }
    return student;
  });
  return gradedStudents;
}
