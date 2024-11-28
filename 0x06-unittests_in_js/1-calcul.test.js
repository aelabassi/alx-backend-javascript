const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
    });
  });
  describe('sUBTRACT', () => {
    it('should return the substraction of two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.5), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.4), 3);
    });
  });
  describe('dIVIDE', () => {
    it('should return the division of two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2.4), 4);
    });
    it('should return "Error" if the second number is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
  });
  describe('other', () => {
    it('should return 0 if the type is not SUM, SUBSTRACT or DIVIDE', () => {
      assert.strictEqual(calculateNumber('MULTIPLY', 4, 2), 0);
    });
  });
});
