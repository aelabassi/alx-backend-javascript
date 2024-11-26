import readDatabase from '../utils';

/**
 * Controller for the students resource
 * @class StudentsController - Controller for the students resource
 * @author EL Abassi Abderrazaq - https://github.com/Abdoelabassi
 */
class StudentsController {
  static async getAllStudents(request, response) {
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DB_FILE)
      .then((data) => {
        const reports = ['This is the list of our students'];
        const compare = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const [field, students] of Object.entries(data).sort(compare)) {
          reports.push([
            `Number of students in ${field}: ${students.length}.`,
            'List:',
            students.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(reports.join('\n'));
      }).catch((error) => {
        response.status(404).send(error.message);
      });
  }

  static async getAllStudentsByMajor(request, response) {
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
    const VALID_MAJORS = ['CS', 'SWE'];
    const { major } = request.params;
    if (!VALID_MAJORS.includes(major)) {
      response.status(404).send('Major parameter must be CS or SWE');
    }
    readDatabase(DB_FILE).then(
      (data) => {
        let reportText = '';
        if (Object.keys(data).includes(major)) {
          const students = data[major].map((student) => student.firstname).join(', ');
          reportText = `List: ${students}`;
          response.status(200).send(reportText);
        }
      },
    ).catch((error) => {
      response.status(404).send(error.message);
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
