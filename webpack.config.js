var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var assetsPath = path.resolve(__dirname, 'public', 'assets');
var entryPath = path.resolve(__dirname, 'frontend', 'app.es6.js');
var stylePath = path.resolve(__dirname, 'frontend', 'style.css');
var host = process.env.APP_HOST || 'localhost';

var config = {

    devtool: 'eval',
    entry: {
        'bundle.js': entryPath,
        'style.css': stylePath,
    },
    output: {
        path: assetsPath,
        filename: '[name]'
    },
    module: {
        loaders: [{
            test: /\.es6\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader?minimize')
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({ filename: '[name]', allChunks: true }),
    ]
};

module.exports = config;
