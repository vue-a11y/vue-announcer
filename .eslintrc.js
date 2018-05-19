module.exports = {
  root: true,
  env: {
    "cypress/globals": true,
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  plugins: [
    "cypress"
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}