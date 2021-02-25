const withPlugins = require('next-compose-plugins');
const path = require('path');
const withImages = require('next-images');

// next.js configuration
const nextConfig = {
  trailingSlash: (id) => {
    if (id.match(/^\/properties\/*/)) {
      return false;
    }
    return true;
  },
};

module.exports = withPlugins([
  withImages({
    images: {
      domains: ['images.prismic.io'],
    },
    target: 'serverless',
    webpack(config) {
      config.resolve.modules.push(path.resolve('./'));
      return config;
    },
  }),
  nextConfig,
]);
