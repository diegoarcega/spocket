const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  extends: [
    'plugin:json/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'prettier', 'import'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 1,
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: 'babel-eslint',
};
