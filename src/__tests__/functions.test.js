const { add, sum } = require('../functions');

/**
 * Param for testing the functions add and sum.
 * @type {number}
 */
const a = 2;
/**
 * Param for testing the functions add and sum.
 * @type {number}
 */
const b = 3;

test('Sum a + b', () => {
	const result = sum(a, b);
	expect(result).toBe(5);
});
