export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  /**
     * Set the sqft of the building
     * @param sqft
     */

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
