const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.js');

module.exports = merge(baseWebpackConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin()
    ]
})