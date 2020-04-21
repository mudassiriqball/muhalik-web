// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS();

const withImages = require('next-images')
module.exports = withImages();
module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
  }