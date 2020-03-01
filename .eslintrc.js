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
    'cypress',
    'vue-a11y'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'vue-a11y/click-events-have-key-events': 'off'
  } 
}