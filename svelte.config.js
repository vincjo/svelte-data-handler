import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import path from 'path'
import { config } from 'dotenv'

const result = config({ path: '../.env'})
if (result.error) {
	config({ path: '../../.env'})
}

/** @type {import('@sveltejs/kit').Config} */
const params = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ out: 'build' }),
		files: {
			hooks: 'src/hooks',
		},
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/svelte-data-handler',
		},
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$core: path.resolve('./src/core'),
					$lib: path.resolve('./src/lib'),
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
				},
			},
			optimizeDeps: {
				  include: ["highlight.js", "highlight.js/lib/core"],
			},		
		}
	}
};

export default params
