const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3', () => {
    assert.strictEqual(calculateNumber(1.2, 2.2), 3);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.4), 5);
  });
  it('should return 9', () => {
    assert.strictEqual(calculateNumber(4.3, 5.3), 9);
  });
  it('should return 3', () => {
    assert.strictEqual(calculateNumber(1.499999, 2.49999), 3);
  });
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });
  it('should return -2', () => {
    assert.strictEqual(calculateNumber(0.5, -3), -2);
  });
});
