/**
 * Method for transfromation dash case string into camel case string.
 * @method toCamelCase
 * @param {string} string - string to transform
 * @param {boolean} [capital=false] - start from upper letter
 * @returns {string} - transformed string
 */
export function toCamelCase(string, capital = false) {
	if (typeof string !== 'string') {
		throw new TypeError('argument "string" is not type of string');
	}

	let converted = string.replace(/-./g, (match) => match.substr(1, 1).toUpperCase());

	if (capital) {
		converted = string.substr(0, 1).toUpperCase() + converted.substr(1);
	}

	return converted;
}
