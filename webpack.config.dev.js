const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');
const PATHS = require('./paths.js');
require('dotenv').config();

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    devServer: {
        static: {
            directory: PATHS.PUBLIC,
        },
        compress: true,
        port: 9000,
    },
})


console.log(22123213213);

console.log(11);
