const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: {
        index: "./src/index.ts",
        "index.polyfill": ["@babel/polyfill", "./src/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: "umd",
        globalObject: "this",
        chunkLoading: false,
        wasmLoading: false
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
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimize: true
    }
};
module.exports = config;