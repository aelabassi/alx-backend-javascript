const fs = require('fs');
const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the number of students in the database
 * @param {string} path - Path to the database file
 * @returns {Promise} - Promise object represents the count
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const reports = [];
      const lines = data.trim().split('\n').slice(1);
      reports.push(`Number of students: ${lines.length}`);
      console.log(`Number of students: ${lines.length}`);
      const fields = {};
      lines.forEach((line) => {
        const student = line.split(',');
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });
      for (const field in fields) {
        if (field) {
          reports.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve(reports.join('\n'));
    }
  });
});

const serverRoutesHandlers = {
  '/': (req, res) => {
    const responseText = 'Hello Holberton School!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.write(Buffer.from(responseText));
  },
  '/students': async (req, res) => {
    const responseParts = ['This is the list of our students'];
    try {
      const report = await countStudents(DB_FILE);
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.write(Buffer.from(responseText));
    } catch (error) {
      responseParts.push(error instanceof Error ? error.message : error.toString());
      const responseText = responseParts.join('\n');
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.setHeader('Content-Length', responseText.length);
    }
  },
};

const app = createServer();

app.on('request', (req, res) => {
  if (serverRoutesHandlers[req.url]) {
    serverRoutesHandlers[req.url](req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
