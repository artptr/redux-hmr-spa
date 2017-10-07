const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
};
