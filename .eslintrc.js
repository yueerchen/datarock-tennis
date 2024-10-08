module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-trailing-spaces': 'error',
  },
};