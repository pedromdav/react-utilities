/**
 * Generate random integer value between min and max
 * @param min minimum value
 * @param max maximum value
 * @returns a random number between min and max
 */
const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min;

export default random;
