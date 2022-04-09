module.exports = {
  ignorePatterns: ['**/*.js', '**/config/test/*', '*.d.ts'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'semi': [2, 'always'],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'no-extra-parens': 'error',
    'max-len': [2, 150, 2, {"ignoreUrls": true}],
    'no-multi-spaces': 'error',
    'react/prop-types': 0,
    'no-extra-parens': 0,
    'no-console': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
