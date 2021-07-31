const string = require('./stringLength.js');
describe('to calculate string length', () => {
    it('string("React") should return number', () => {
        expect(typeof string('text')).toBe('number');
    });
    it('string("") should return "Your text should be equal or greater than 1"', () => {
        expect(string('')).toEqual('Your text should be equal or greater than 1');
    });
    it('string("My favourite framework is React") should return "Your text should be equal or less than 10"', () => {
        expect(string('My favourite framework is React')).toEqual("Your text should be equal or less than 10");
    });
    it('string("Html") should return 4', () => {
        expect(string('Html')).toBe(4);
    });
    it('string("Bootstrap") should return 0', () => {
        expect(string('Bootstrap')).toBe(9);
    });
})
