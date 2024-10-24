const EXTENSION_NAME = 'wapi'
const LOGSTORE = 'scrm-web-sender-juzhen'
const WAPLUS_REMOVE_FLAG = false

// 打开tab页面
function openInstallUrl() {
  // chrome.tabs.create({ url: 'https://wawebsender.com/whatsapp-tools' })
  chrome.tabs.create({ url: 'https://web.whatsapp.com' })
}

export { EXTENSION_NAME, LOGSTORE, WAPLUS_REMOVE_FLAG, openInstallUrl }
