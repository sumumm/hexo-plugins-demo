/* global hexo */

'use strict'; /* 启用strict模式 */

hexo.on('ready', () => {
    const { version } = require('./package.json') // 获取本插件的版本号
    hexo.log.info(`Welcome to hexo-plugins-demo@${version}`)
})