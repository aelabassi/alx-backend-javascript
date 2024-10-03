export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  /**
   * name - setter for name
   * @param {string} newName
   *
   */

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  /**
   * length - setter for length
   * @param newLength
   */

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  /**
   * students - setter for students
   * @param newStudents
   */

  set students(newStudents) {
    if (newStudents instanceof Array) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
