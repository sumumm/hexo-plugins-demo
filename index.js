/* global hexo */

'use strict'; /* 启用strict模式 */

hexo.on('ready', () => {
    const { version } = require('../../package.json')
    hexo.log.info(` Welcome to hexo-plugins-demo! ${version} `)
})