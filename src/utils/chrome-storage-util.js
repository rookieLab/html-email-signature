function updateIsShowContinueBtnStorage(newValue) {
  chrome.storage.local.set({ isShowContinueBtn: newValue })
}

// 同步方法
async function getDataByKeySync(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, function (value) {
        resolve(value[key])
      })
    } catch (ex) {
      reject(ex)
    }
  })
}

export { updateIsShowContinueBtnStorage }
