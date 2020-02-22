module.exports = {
  root: true,
  env: {
    "cypress/globals": true,
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  plugins: [
    'vue',
    'cypress',
    'vue-a11y'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  }
}