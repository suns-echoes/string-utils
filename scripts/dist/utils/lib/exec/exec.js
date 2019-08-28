const child_process = require('child_process');
const util = require('util');


const _exec = util.promisify(child_process.exec);


export async function exec(cmd) {
	const { stderr } = await _exec(cmd);

	if (stderr) {
		throw stderr;
	}
}
