const baseConfig = require('../webpack.config');
const path = require('path');

module.exports = (storybookBaseConfig) => {
  return Object.assign({}, storybookBaseConfig, {
    entry: Object.assign({}, storybookBaseConfig.entry, {
      preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview)
    }),
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        components: path.resolve(__dirname, '../src/components/'),
        containers: path.resolve(__dirname, '../src/containers/'),
        store: path.resolve(__dirname, '../src/store/')
      }
    }),
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1))
    })
  });
};
