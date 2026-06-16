const cloneArray = require('./cloneArray')

test('Cloning an array', () =>
{
    const array = [1, 2, 3]
    // Returns the exact same array
    expect(cloneArray(array)).toEqual(array)
    // Returns the clone of the array
    expect(cloneArray(array)).not.toBe(array)
})
