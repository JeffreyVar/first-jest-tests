const cloneArray = require('./cloneArray');

// Different places in memory, passed by reference, so test will fail
// test('properly clones array', () => {
//     const array = [1, 2, 3];
//     expect(cloneArray(array)).toBe(array)
// })

// Arrays have same structure, but different places in memory, so toEqual is required
test('properly clones array', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array) // Ensures clone of the original array is created
})