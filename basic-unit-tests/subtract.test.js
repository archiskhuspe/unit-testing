const subtract = require('./subtract')

test('Subtracting 2 numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1)
})
