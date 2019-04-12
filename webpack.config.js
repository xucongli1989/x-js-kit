const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        "index": "./src/index.ts",
        "index.polyfill": ["@babel/polyfill", "./src/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: "umd",
        globalObject: "this"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist", "lib"]),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            excludeAssets: [/index.js/]
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimize: true
    },
    devServer: {
        inline: true,
        open: true,
        contentBase: path.join(__dirname, "./dist")
    }
};
module.exports = config;