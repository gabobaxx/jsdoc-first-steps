// @ts-check

/**
 * Library one
 * @module LibOne
 *
 */

/**
 * Add two numbers
 * @param {Number} x First number
 * @param {Number} y Second number
 * @returns {Number} Sum of x + y
 */
const add = (x, y) => x + y;

/**
 * Substract two numbers
 * @param {Number} x First number
 * @param {Number} y Second number
 * @returns {Number} Substract of x and y
 */
const substract = (x, y) => x - y;

module.exports = {
	add,
	substract,
};
