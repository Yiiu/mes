const { app } = require('electron')

const config = {
  mainLoadURL: 'https://q.guanmai.cn/mes',
  printLoadURL: 'https://txcdn.guanmai.cn/mes/feature-lite/print.html',
  isOpenDevTools: false,
  showPrint: false,
  isOpenPrintDevTools: false,
}

// 本地开发（node_modules/electron 直接启动）时打开调试开关，打包后保持关闭
if (!app.isPackaged) {
  config.isOpenDevTools = true
  config.showPrint = true
  config.isOpenPrintDevTools = true
}

try {
  const mes = require(app.getPath('desktop') + '/mes.json')
  Object.assign(config, mes)
} catch (err) {
  // 桌面没有 mes.json 时忽略，使用默认配置
}

module.exports = config
