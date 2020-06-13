import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default commandLineArgs => {
  return {
    input: 'src/index.js',
    plugins: [
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      vue({
        css: true,
        compileTemplate: true,
        template: {
          isProduction: true,
          optimizeSSR: commandLineArgs.format === 'cjs'
        }
      }),
      buble({
        objectAssign: 'Object.assign'
      }),
      commandLineArgs.format === 'iife' && terser()
    ],
    output: {
      name: 'VueAnnouncer',
      exports: 'named'
    }
  }
}
