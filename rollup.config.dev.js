import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import chokidar from 'chokidar'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    resolve(),
    eslint({
      include: './src/**'
    }),
    vue({
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign'
    })
  ],
  output: [
    {
      name: 'VueAnnouncer',
      file: 'demo/vue-announcer.js',
      format: 'umd',
      exports: 'named'
    }
  ]
}
