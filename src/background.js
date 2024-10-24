// 监听扩展程序图标的点击事件
chrome.action.onClicked.addListener(() => {
  // 打开 options 页面
  chrome.runtime.openOptionsPage();
});
