import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  /**
     * Setter for price
     * @param price
     */

  set amount(amount) {
    if (amount < 0) {
      throw new Error('Price must be greater than 0');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  /**
     * Setter for currency
     * @param currency
     */

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
