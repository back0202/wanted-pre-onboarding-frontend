module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-parser',
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
};
