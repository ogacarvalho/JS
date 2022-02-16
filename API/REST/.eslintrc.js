module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-spaces': 'off',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'no-multiple-empty-lines': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
