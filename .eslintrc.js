module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@assets', './src/assets'],
        ['@components', './src/components'],
        ['@configs', './src/configs'],
        ['@context', './src/context'],
        ['@data', './src/data'],
        ['@i18n', './src/i18n'],
        ['@pages', './src/pages'],
        ['@redux', './src/redux'],
        ['@repository', './src/repository'],
        ['@routes', './src/routes'],
        ['@styles', './src/styles'],
        ['@utils', './src/utils'],
      ],
    },
  },
};
