
'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'), // html入口文件
    assetsRoot: path.resolve(__dirname, '../dist'),  // 产品文件的存放路径
    assetsSubDirectory: 'static', // 二级目录，存放静态资源文件的目录，位于dist文件夹下
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // 是否开启gzip压缩
    productionGzipExtensions: ['js', 'css'], // gzip模式下需要压缩的文件的扩展名，设置js、css之后就只会对js和css文件进行压缩
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 3006,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static', // 静态资源文件夹
    assetsPublicPath: '/', // 代理配置表，在这里可以配置特定的请求代理到对应的API接口  例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
