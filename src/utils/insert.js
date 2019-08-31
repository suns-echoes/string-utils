/**
 * Method inserts new string into original one on given position.
 * @method insert
 * @param {string} string - original string
 * @param {string} insertion - string to insert
 * @param {number} [position=0] - insert at this position
 * @returns {string} - new string
 */
export function insert(string, insertion, position = 0) {
	if (position >= 0) {
		return string.substr(0, position) + insertion + string.substr(position);
	}
	else {
		return string.substr(0, string.length + position) + insertion + string.substr(position);
	}
}
