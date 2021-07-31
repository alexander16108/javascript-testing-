const { it, expect } = require('@jest/globals');
const capitalize = require('./capitalize.js');

it('capitalize(1) should return "Your input should be a string"', () => {
    expect(capitalize(1)).toEqual('Your input should be a string');
})
it('capitalize("react") should return string', () => {
    expect(typeof capitalize("react")).toBe('string');
})
it('capitalize("react") should return "React"', () => {
    expect(capitalize("react")).toBe('React');
})
it('capitalize("Html") should return "Html"', () => {
    expect(capitalize("Html")).toBe('Html');
})