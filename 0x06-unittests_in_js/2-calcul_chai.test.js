const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of two numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
    });
  });
  describe('sUBSTRACT', () => {
    it('should return the substraction of two numbers', () => {
      expect(calculateNumber('SUBSTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBSTRACT', 1.5, 3.5)).to.equal(-2);
      expect(calculateNumber('SUBSTRACT', 1.4, 3.5)).to.equal(-3);
    });
  });
  describe('dIVIDE', () => {
    it('should return the division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 3.5, 1.5)).to.equal(2);
    });
    it('should return "Error" if the second number is 0', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
  });
  describe('other', () => {
    it('should return 0 if the type is not SUM, SUBSTRACT or DIVIDE', () => {
      expect(calculateNumber('MULT', 1, 3)).to.equal(0);
      expect(calculateNumber('NORM', 1.5, 3.5)).to.equal(0);
      expect(calculateNumber('UNIT', 1.4, 3.5)).to.equal(0);
    });
  });
});
