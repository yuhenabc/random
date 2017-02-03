import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/random.js',
  targets: [
    {dest: 'index.js', format: 'cjs'},
    {dest: 'dist/random.js', format: 'umd'}
  ],
  moduleName: 'random',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
