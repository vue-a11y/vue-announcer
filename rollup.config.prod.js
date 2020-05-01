import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    vue({
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    terser()
  ],
  output: {
    name: 'VueAnnouncer',
    exports: 'named'
  }
}
