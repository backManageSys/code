'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 开发环境——线下环境——也可以说是虚拟环境
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://xuanlv1.natapp1.cc"'
    // BASE_API: '"http://47.102.146.253:1024"'
    // BASE_API: '"49.73.24.124"'
})
