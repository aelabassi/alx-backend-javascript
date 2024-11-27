const assert = require('assert');
const calculNumber = require('./0-calcul');

describe('calculNumber', () => {
  describe('#round', () => {
    it('should return 3', () => {
      assert.strictEqual(calculNumber(1.2, 2.2), 3);
    });
    it('should return 6', () => {
      assert.strictEqual(calculNumber(1.5, 3.5), 6);
    });
    it('should return 5', () => {
      assert.strictEqual(calculNumber(1.5, 3.4), 5);
    });
    it('should return 9', () => {
      assert.strictEqual(calculNumber(4.3, 5.3), 9);
    });
    it('should return 3', () => {
      assert.strictEqual(calculNumber(1.499999, 2.49999), 3);
    });
  });
});
