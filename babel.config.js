module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@storybookui': './.storybook/index.js',
          },
        },
      ],
    ],
  };
};
