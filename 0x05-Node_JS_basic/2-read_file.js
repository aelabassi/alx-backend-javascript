// reading a file synchronously
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line.length > 0);
    console.log(`Number of students: ${lines.length - 1}`);
    const students = {};
    lines.forEach((line) => {
      const student = line.split(',');
      if (!students[student[3]]) students[student[3]] = [];
      students[student[3]].push(student[0]);
    });
    delete students.field;
    for (const field in students) {
      if (field) {
        const list = students[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
