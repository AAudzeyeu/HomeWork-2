// // const miniCssExtractPlugin = require('mini-css-extract-plugin')

// // module.exports = {
// //     entry: '/src/index.js',
// //     output: {
// //         filename: 'bundle.js',
// //         path: '/dist'
// //     },
// //     resolve: {
// //         extensions: ['.js'], 
// //     },
// //     module: {
// //         rules: [
// //             {
// //                 test: /\.scss$/,
// //                 use [
// //                     'style-loader'
// //                 ]
// //             }
// //         ]
// //     }
// // }

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
require('dotenv').config();

const PATHS = {
    SRC: path.join(__dirname, '/src'),
    DIST: path.join(__dirname, '/dist'),
    ASSETS: path.join(__dirname, '/assets'),
    PUBLIC: path.join(__dirname, '/public')
}

module.exports = {
    mode: 'development',
    entry: path.join(PATHS.SRC, '/index.js'),
    watch: true,
    output: {
        filename: 'bundle.js',
        path: path.resolve(PATHS.DIST)
    },
    devServer: {
        static: {
            directory: path.PUBLIC,
        },
        compress: true,
        port: 9000,
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
                    }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader"
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
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(PATHS.PUBLIC, 'index.html')
            // favicon: "/public/favicon.ico"
        })
    ]
}