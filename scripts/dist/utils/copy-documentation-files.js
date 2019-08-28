import { copy } from '@suns-echoes/file-system-utils/src/utils/copy.js';

import { config } from '../config.js';


export async function copyDocumentationFiles() {
	return await copy(config.paths.docs.input, config.paths.docs.output);
}
