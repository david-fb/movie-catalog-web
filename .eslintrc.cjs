/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: {
    semi: ['error', 'always'],
  },
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: [],
    },
  ],
};
