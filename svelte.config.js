import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';


// import pkg from './package.json';


/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true,
		  })
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte',
		adapter: adapter({
		  // default options are shown
		  pages: 'build',
		  assets: 'build',
		  fallback: null,
		}),
	  },
};
