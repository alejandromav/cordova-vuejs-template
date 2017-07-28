var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URL: '"http://clother.es/api/0.1"',
    BASE_URL: '"/android_asset/www/"'
})
