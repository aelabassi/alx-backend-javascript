const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const friend = sinon.spy(console);
    const someReturn = sinon.stub(Utils, 'calculateNumber');

    someReturn.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(someReturn.calledWith('SUM', 100, 20)).to.be.true;
    expect(someReturn.callCount).to.be.equal(1);
    expect(friend.log.calledWith('The total is: 10')).to.be.true;
    expect(friend.log.callCount).to.be.equal(1);
    someReturn.restore();
    friend.log.restore();
  });
});
