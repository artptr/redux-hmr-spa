const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = IS_PRODUCTION
    ? require('./webpack.config.prod')
    : require('./webpack.config.dev');
