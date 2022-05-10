import adapter from '@sveltejs/adapter-static'
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
		adapter: adapter({ 
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: false
		},

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
