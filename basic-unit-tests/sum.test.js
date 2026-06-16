const sum = require('./sum') // Importing the sum function from 'sum.js'

// Writing a test using 'jest'
// String of what the test is doing
test('Adding 2 numbers', () => 
// Function which gets called to run the test
{
    expect(sum(1, 2)).toBe(3)
})
