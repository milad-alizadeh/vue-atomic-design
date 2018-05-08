const baseConfig = require('../../build/webpack.dev.conf');
const path = require('path');

module.exports = (storybookBaseConfig) => {
  return Object.assign({}, storybookBaseConfig, {
    entry: Object.assign({}, storybookBaseConfig.entry, {
      preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview)
    }),
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        components: path.resolve(__dirname, '../../src/components/'),
        containers: path.resolve(__dirname, '../../src/containers/'),
        scss: path.resolve(__dirname, '../../src/scss/'),
        store: path.resolve(__dirname, '../../src/store/')
      }
    })
  });
};
