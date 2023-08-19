module.exports = {
  extends: ['universe/native', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^expo', '^react'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['export', 'function'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['export', 'function'] },
    ],
  },
};
