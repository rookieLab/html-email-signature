const SEND_TYPE_PRO = 'pro'
const SEND_TYPE_SIMPLE = 'simple'
const DISABLED = 'disabled'

function getContinueStopFlag(type) {
  if (type !== SEND_TYPE_PRO && type !== SEND_TYPE_SIMPLE) {
    return
  }
  let stopFlag = false
  let stopFlagSimple = false
  if (type === SEND_TYPE_SIMPLE) {
    stopFlag = DISABLED
    stopFlagSimple = false
  }
  if (type === SEND_TYPE_PRO) {
    stopFlag = false
    stopFlagSimple = DISABLED
  }
  return { stopFlag, stopFlagSimple }
}

// 打开聊天窗口--打开指定联系人的一个聊天窗口
function openChatUrl(phoneNum) {
  return new Promise((resolve) => {
    let wam = document.getElementById('wamessages')
    if (!wam) {
      wam = document.createElement('a')
      wam.id = 'wamessages'
      document.body.append(wam)
    }
    let link = `https://api.whatsapp.com/send?phone=${phoneNum}`
    wam.setAttribute('href', link)
    // Wait for DOM operation to complete.
    setTimeout(() => {
      wam.click()
      resolve()
    }, 0)
  })
}

export { getContinueStopFlag, openChatUrl }
