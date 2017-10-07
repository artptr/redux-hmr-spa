const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot-loader/webpack',
                    'babel-loader',
                ],
                include: path.join(__dirname, 'src'),
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
};
