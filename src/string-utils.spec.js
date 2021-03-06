const fs = require('fs');
const { promisify } = require('util');

import { StringUtils } from './string-utils.js';


const readdir = promisify(fs.readdir);


async function findMethods() {
	const entities = await readdir('./src/utils');
	const matchNonSpecFiles = /^((?!\.spec\.js).)*\.js$/;
	const methods = [];

	for (const entity of entities) {
		if (matchNonSpecFiles.test(entity)) {
			const path = `./utils/${entity}`;
			const module = await import(path);
			const keys = Object.keys(module);

			keys.forEach((key) => {
				if (typeof module[key] === 'function') {
					methods.push(key);
				}
				else if (key !== 'default') {
					throw new Error(`"${entity}" module exports entity "${key}" that is not a function`);
				}
			});
		}
	}

	return methods;
}


describe('StringUtils', () => {
	it('exports all existing methods', async () => {
		const exportedMethods = Object.keys(StringUtils);
		const foundMethods = await findMethods();

		expect(exportedMethods).to.be.eql(foundMethods);
	});
});
