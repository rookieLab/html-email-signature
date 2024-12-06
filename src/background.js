

// 处理扩展程序的后台任务，比如保存设置、管理状态等
let unurl = 'https://docs.google.com/forms/d/e/1FAIpQLSd0MdkOOONlIOosiNpXxGXrsYXPLWvaRQjvYnb8BwTqnX7egg/viewform';
chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.setUninstallURL(unurl);
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  chrome.runtime.setUninstallURL(unurl);
});


// 监听扩展程序图标的点击事件
chrome.action.onClicked.addListener(() => {
  // 打开 options 页面
  chrome.runtime.openOptionsPage();
});


//监听点击
// chrome.action.onClicked.addListener(async (tab) => {
//   console.log('background click', tab)
//   chrome.tabs.sendMessage(tab.id, { actionClicked: true }, () => { })
// });

function saveSavedTemplates(data) {
  chrome.storage.local.set({ savedTemplates: data }, () => {
    console.log('savedTemplates saved')
  })
}
// 

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log('background request', request)
  // if (request.to === 'BACKGROUND' && request.data === 'close') {
  //   chrome.tabs.sendMessage(tab.id, { actionClicked: true }, () => { })
  // }

  if (request.action === 'MORE_SIGNATURE') {
    console.log('MORE_SIGNATURE')
    chrome.runtime.openOptionsPage();
  }

  if (request.action === "saveSavedTemplates") {
    // 处理消息，例如向所有 tab 发送消息
    // console.log("background saveSavedTemplates", request.data)
    saveSavedTemplates(JSON.stringify(request.data))
  }
  if (request.action === "getSavedTemplates") {
    // 处理消息，例如向所有 tab 发送消息
    chrome.storage.local.get(['savedTemplates'], (result) => {
      // console.log("background getSavedTemplates", result.savedTemplates)
      chrome.tabs.sendMessage(sender.tab.id, {
        action: 'savedTemplatesResponse',
        data: JSON.parse(result.savedTemplates) || []
      });
    });
  }
});



//监听点击
chrome.action.onClicked.addListener(async (tab) => {
  console.log('background click', tab)
  chrome.tabs.sendMessage(tab.id, { actionClicked: true }, () => { })
});



// 打开插件就要把所有tabs注入一遍content,这里设置延时两2，这样就能保证插件下载或者更新的时候，事件唯一，给了把firstInstall从localstorage取出修改保存的时间
chrome.tabs.query({}, function (info) {
  setTimeout(function () {
    for (let i = 0; i < info.length; i++) {
      chrome.scripting.executeScript({ target: { tabId: info[i].id }, files: ['js/content-test.js'] }, function (res) {
        chrome.action.setPopup({ popup: "", tabId: info[i].id })
        if (chrome.runtime.lastError) {
          console.error('onUpdated1', chrome.runtime.lastError)
          // chrome.action.setPopup({ popup: "popup.html", tabId: info[i].id })
        }
      });
    }
  }, 2000)
})

// 页面切换时要实时修改popup
chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.scripting.executeScript({ target: { tabId }, files: ['js/content-test.js'] }, function (res) {
    chrome.action.setPopup({ popup: "", tabId })
    if (chrome.runtime.lastError) {
      console.error('onUpdated2', chrome.runtime.lastError)
      // chrome.action.setPopup({ popup: "popup.html", tabId })
    }
  });
})