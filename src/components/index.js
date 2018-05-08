const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.vue$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.vue/, '$1');
  module.exports[componentName] = req(key).default;
});
