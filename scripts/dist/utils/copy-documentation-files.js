const { join } = require('path');

import { copy } from '@suns-echoes/file-system-utils/src/utils/copy.js';

import { config } from '../config.js';


export async function copyDocumentationFiles() {
	await copy('README.md', join(config.paths.dist, 'README.md'));
	await copy(config.paths.docs.input, config.paths.docs.output);
}
