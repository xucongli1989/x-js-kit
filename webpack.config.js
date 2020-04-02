const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const config = {
    entry: {
        index: "./src/index.ts",
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
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), './{dist,lib}/*')]
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            excludeChunks: ["index"]//只引用polyfill的版本即可
        }),
        new HtmlWebpackTagsPlugin({ tags: [], append: false }), //向html中追加元素，暂时没有用到
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