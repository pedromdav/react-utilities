/**
 * JavaScript implementation of Python's range
 * More info at: https://www.joshwcomeau.com/snippets/javascript/range/
 * @param start start of range
 * @param end end of range (excluded)
 * @param step gap between numbers in the range
 * @returns array containing a range of numbers
 */
const range = (start: number, end: number, step: number = 1) => {
	let output = [];
	if (typeof end === 'undefined') {
		end = start;
		start = 0;
	}
	for (let i = start; i < end; i += step) {
		output.push(i);
	}
	return output;
};
