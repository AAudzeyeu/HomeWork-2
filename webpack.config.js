const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { minify } = require('html-minifier-terser');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')

// const isDev = process.env.NODE_ENV === 'development'
// const isProd = !isDev
// console.log(`isDev: ${isDev}`);

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    return config
}

// if (true) {
//     config.minimizer = [
//         new CssMinimizerWebpackPlugin(),
//         new TerserWebpackPlugin()
//     ]
// }

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.css', '.png', '.ttf', '.json'],
        alias: {

        },
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        // hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/favicon.ico'),
        //         to: path.resolve(__dirname, 'dist')
        //     }
        // ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // hmr: isDev,
                            // reloadAll: true,
                            // publicPath: '/public/path/to',
                        }
                    }, 'css-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // hmr: isDev,
                            // reloadAll: true,
                            // publicPath: '/public/path/to',
                        }
                    }, 'css-loader']
            },
            // {
            //     test: /\.xml$/,
            //     use: ['xml-loader']
            // }
            // {
            //     test: /\.(ttf|woff|woff2|eot)$/,
            //     use: ['file-loader']
            // }
            // {
            //     test: /\.(png|jpg|svg|gif)$|/,
            //     use: ['file-loader']
            // }
        ]
    }
}