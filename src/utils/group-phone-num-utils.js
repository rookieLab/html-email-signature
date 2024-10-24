//群组导出手机号方法

//把群组导出的手机号从localStorage中取出，并放入localStorage
function addGroupPhoneNumList(arrayStr) {
  chrome.storage.local.get(['groupPhoneNumList'], function (res) {
    let groupPhoneNumList = res.groupPhoneNumList !== undefined ? res.groupPhoneNumList : []
    let array = arrayStr.split(',')
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].replace('+', '')
      array[i] = array[i].replace(' ', '')
      groupPhoneNumList.push(array[i])
    }
    chrome.storage.local.set({ groupPhoneNumList: groupPhoneNumList })
  })
}

//判断手机号是不是从群组导出来的
function isGroupPhoneNumList(phoneNum) {
  return new Promise(function (resolve) {
    let result = false
    chrome.storage.local.get(['groupPhoneNumList'], function (res) {
      let groupPhoneNumList = res.groupPhoneNumList !== undefined ? res.groupPhoneNumList : []
      if (groupPhoneNumList.length === 0) {
        result = false
      }
      for (let i = 0; i < groupPhoneNumList.length; i++) {
        // console.log(groupPhoneNumList[i]);
        if (phoneNum === groupPhoneNumList[i]) {
          result = true
        }
      }
    })
    setTimeout(async function () {
      resolve(result)
    }, 300)
  })
}

export { addGroupPhoneNumList, isGroupPhoneNumList }
