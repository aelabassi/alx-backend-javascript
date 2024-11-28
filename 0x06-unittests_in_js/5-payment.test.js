const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spyConsole;
    beforeEach(() => {
        spyConsole = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spyConsole.restore();
    });

    it('should log correct output when the promise resolves', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spyConsole.calledWith('The total is: 120')).to.equal(true);
        expect(spyConsole.calledOnce).to.equal(true);
    });

    it('should log correct output when the promise rejects', () => {
        sendPaymentRequestToApi(10,10);
        expect(spyConsole.calledWith('The total is: 20')).to.equal(true);
        expect(spyConsole.calledOnce).to.equal(true);
    });
});
