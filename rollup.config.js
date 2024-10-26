import terser from '@rollup/plugin-terser';

export default {
	input: 'src/Main.js',
	output: {
		file: 'bundle.js',
		format: 'esm'
	},
  plugins: [
    terser(),
  ],
};

