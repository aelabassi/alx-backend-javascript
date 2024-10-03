export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  /**
     * Set the name of the airport
     * @param name
     */

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  /**
     * Set the code of the airport
     * @param code
     */
  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
