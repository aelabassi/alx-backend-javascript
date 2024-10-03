export default class HelbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  /**
     * set size
     * @param size
     */
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  [Symbol.toPrimitive](entity) {
    if (entity === 'number') {
      return this.size;
    }
    if (entity === 'string') {
      return this.location;
    }
    return this;
  }
}
