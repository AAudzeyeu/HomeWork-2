const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = require('./paths.js');
const path = require('path');


module.exports = {
    entry: path.join(PATHS.SRC, '/index.js'),
    watch: true,
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(PATHS.DIST)
    },
    resolve: {
        extensions: ['.js'], 
        alias: {
            assets: path.resolve(PATHS.ASSETS),
            src: path.resolve(PATHS.SRC)
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                
            },
            {
                test: /\.(png|jpg?e|gif)$/i,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(PATHS.PUBLIC, 'index.html')
        })
    ]
}