// Write an interface named Student that accepts
// the following elements: firstName(string), lastName(string), age(number), and location(string)
export default interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students, and create an array named studentsList containing the two variables
const student1: Student = {firstName: "John", lastName: "Doe", age: 20, location: "USA"};
const student2: Student = {firstName: "Jane", lastName: "Doe", age: 21, location: "UK"};

const studentsList: Array<Student> = [student1, student2];

// Using Vanilla Javascript, render a table and for each
// elements in the array, append a new row to the table

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    table.appendChild(row);

    const firstName = document.createElement('td');
    firstName.textContent = student.firstName;
    row.appendChild(firstName);


    const location = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(location);
})