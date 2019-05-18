import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/random.ts',
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
    typescript(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
