const baseWebpackConfig = require('./webpack.config.js');

module.exports = merge(baseWebpackConfig, {
    mode: "production",
})