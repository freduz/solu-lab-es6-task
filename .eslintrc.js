module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
