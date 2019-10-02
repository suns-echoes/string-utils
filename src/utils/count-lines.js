/**
 * Method counts lines in given string.
 * @method countLines
 * @param {string} string - string to check
 * @returns {number} - lines count
 */
export function countLines(string) {
	if (typeof string !== 'string') {
		throw new TypeError('argument "string" is not type of string');
	}

	if (string === '') {
		return 0;
	}
	else {
		const { length } = string;
		let count = 1;

		for (let i = 0; i < length; i++) {
			if (string.charAt(i) === '\n') {
				count++;
			}
		}

		return count;
	}
}
