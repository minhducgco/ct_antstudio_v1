module.exports = api => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@context': './src/context',
          '@data': './src/data',
          '@i18n': './src/i18n',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@repository': './src/repository',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ...(api.env() !== 'development' ? ['transform-remove-console'] : []),
  ],
});
