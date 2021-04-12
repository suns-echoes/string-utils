/**
 * Method for transfromation camel case string into dash case string.
 * @method toDashCase
 * @param {string} string - string to transform
 * @param {boolean} [conservative=false] - don't group upper case letters
 * @returns {string} - transformed string
 */
export function toDashCase(string, conservative = false) {
	if (typeof string !== 'string') {
		throw new TypeError('argument "string" is not type of string');
	}

	if (conservative) {
		return string.replace(/[A-Z]|[0-9]+/g, (match, offset) => `${offset > 0 ? '-' : ''}${match.toLowerCase()}`);
	}
	else {
		return string.replace(/([A-Z]+(?=[A-Z])|[A-Z])|([0-9]+)/g, (_, p1, p2, offset) => (
			(offset > 0 ? '-' : '') + (
				(p1 !== undefined ? p1.toLowerCase() : '') +
				(p2 !== undefined ? p2 : '')
			)
		));
	}
}
