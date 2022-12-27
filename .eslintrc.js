module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-parser',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': [0],
  },
};
