/**
 * 显示帮助
 */

const help = require('u-help')
const pkg = require('../package.json')

function main () {
  help.show('mutilroom v' + pkg.version, {
    '命令': {
      upload: '上传文件到cdn',
      base64: 'base64图片'
    }
  })
}

module.exports = {
  run: main
}
