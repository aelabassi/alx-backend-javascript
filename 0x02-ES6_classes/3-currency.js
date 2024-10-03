export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  /**
     * code setter
     * @param code
     */

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  /**
     * name setter
     * @param name
     */

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
