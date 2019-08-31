/**
 * Method inserts new string into original one on given position.
 * @method overwrite
 * @param {string} string - original string
 * @param {string} insertion - string to insert that will overwrite part of original one
 * @param {number} [position=0] - overwrite from this position
 * @returns {string} - new string
 */
export function overwrite(string, insertion, position = 0) {
	if (position >= 0) {
		return string.substr(0, position) + insertion + string.substr(position + insertion.length);
	}
	else {
		return (
			string.substr(0, string.length + position) +
			insertion +
			string.substr(string.length + position + insertion.length)
		);
	}
}
