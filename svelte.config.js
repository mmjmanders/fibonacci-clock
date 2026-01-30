import adapter from '@sveltejs/adapter-static';

const { argv, env } = process;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
		paths: {
			base: argv.includes('dev') ? '' : env.BASE_PATH
		}
	}
};

export default config;
