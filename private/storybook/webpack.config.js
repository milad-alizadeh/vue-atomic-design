const path = require('path');

module.exports = (storybookBaseConfig) => {
  let config = Object.assign({}, storybookBaseConfig, {
    entry: Object.assign({}, storybookBaseConfig.entry, {
      preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview)
    }),
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        components: path.resolve(__dirname, '../../src/components/'),
        containers: path.resolve(__dirname, '../../src/containers/'),
        scss: path.resolve(__dirname, '../../src/scss/'),
        assets: path.resolve(__dirname, '../../src/assets/'),
        store: path.resolve(__dirname, '../../src/store/')
      }
    })
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../../src/scss/')
  });

  return config;
};
