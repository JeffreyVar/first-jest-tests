const sum = require('./sum');

test('properly adds to numbers', () => {
    expect(sum(1, 2)).toBe(3)
})