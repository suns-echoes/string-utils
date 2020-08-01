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
