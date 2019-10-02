import { exec } from '@suns-echoes/exec/src/exec';


export async function runTests() {
	const { code, output } = await exec('npm', ['run', 'coverage']);

	if (code !== 0) {
		throw output;
	}
}
