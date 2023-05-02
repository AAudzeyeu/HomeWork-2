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
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    watch: true,
    output: {
        filename: 'bundle.js',
        path: '/dist'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.js'], 
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
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
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, '/public/index.html')
            // favicon: "/public/favicon.ico"
        })
    ]
}