export function toDashCase(string, conservative = false) {
	if (typeof string !== 'string') {
		throw new TypeError('argument "string" is not type of string');
	}

	if (conservative) {
		return string.replace(/[A-Z]|[0-9]+/g, (match, offset) => `${offset > 0 ? '-' : ''}${match.toLowerCase()}`);
	}
	else {
		return string.replace(/[A-Z]+[A-Z][^A-Z]|[A-Z]|[0-9]/g, (match, offset) => {
			console.log(match, match.length, offset, offset > 0, match.length === 1);

			const x = (
				(offset > 0 ? '-' : '') +
				(match.length === 1) ?
					match.toLowerCase() :
					(
						match.substr(0, match.length - 2) +
						'+' +
						match.substr(-2, 2)
					).toLowerCase()
			);

			console.log(x);
			console.log();

			return x;
		});
		// return string.replace(/([A-Z]+[A-Z][^A-Z]?)|([0-9]+[0-9][^0-9]?)|([A-Z]+)|([0-9]+)/g, (_, p1, p, p2, p3, offset) => (
		// 	(offset > 0 ? '-' : '') +
		// 	(p1 !== undefined ? (p1.substr(0, p1.length - 2) + '-' + p1.substr(-2, 2)).toLowerCase() : '') +
		// 	(p2 !== undefined ? p2.toLowerCase() : '') +
		// 	(p3 !== undefined ? p3 : '')
		// ));
	}
}
