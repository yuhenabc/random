import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/random.js',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
      name: 'random'
    },
    {
      file: 'dist/random.js',
      format: 'umd',
      name: 'random'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
