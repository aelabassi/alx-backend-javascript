export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    this._brand;
  }

  /**
     * Set the brand of the car
     * @param brand
     */
  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    this._motor;
  }

  /**
     * Set the motor of the car
     * @param motor
     */
  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    this._color;
  }

  /**
     * Set the color of the car
     * @param color
     */
  set color(color) {
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Car = this.constructor[Symbol.species];
    return new Car();
  }
}
