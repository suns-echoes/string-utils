/**
 * Method counts lines in given string.
 * @method countLines
 * @param {string} str - string to check
 * @returns {number} - lines count
 */
export function countLines(str) {
	if (typeof str !== 'string') {
		throw new TypeError('"str" is not a string');
	}

	if (str === '') {
		return 0;
	}
	else {
		const { length } = str;
		let count = 1;

		for (let i = 0; i < length; i++) {
			if (str.charAt(i) === '\n') {
				count++;
			}
		}

		return count;
	}
}
