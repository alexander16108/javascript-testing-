const reverseString = require('./reverseString.js');

it('reverseString("React") should return string', () => {
    expect(typeof reverseString('React')).toBe('string');
})
it('reverseString("React") should return "tcaeR"', () => {
    expect(reverseString('React')).toBe('tcaeR');
})
it('reverseString("Html") should return "lmtH"', () => {
    expect(reverseString('Html')).toBe('lmtH');
})