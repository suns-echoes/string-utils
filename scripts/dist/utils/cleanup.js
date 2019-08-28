import { remove } from '@suns-echoes/file-system-utils/src/utils/remove.js';

import { config } from '../config.js';


export async function cleanup() {
	await remove(config.paths.dist);
}
