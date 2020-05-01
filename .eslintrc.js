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
    'plugin:vuejs-accessibility/recommended'
  ],
  plugins: [
    'cypress',
    'vuejs-accessibility'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off'
  } 
}