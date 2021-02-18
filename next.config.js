const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['images.prismic.io'],
  },
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
