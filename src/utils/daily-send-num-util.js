import { FREE_DAILY_SEND_COUNT_LIMIT } from '@/config/dict'

function getMaxTimestamp(dailySendNums) {
  if (!dailySendNums || Object.keys(dailySendNums).length === 0) {
    return 0
  }
  let maxTimestamp = 0
  Object.keys(dailySendNums).forEach((item, i) => {
    maxTimestamp = item > maxTimestamp ? item : maxTimestamp
  })
  return maxTimestamp
}

function checkDailySendNums(dailySendNums) {
  let isReachSendLimit = false
  let showConfirmTitle = ''
  if (!dailySendNums) {
    dailySendNums = {}
  }
  let maxTimestamp = getMaxTimestamp(dailySendNums)
  let currentTime = new Date().getTime()
  if (currentTime - maxTimestamp >= 86400000) {
    dailySendNums[currentTime] = 0
  } else {
    currentTime = maxTimestamp
  }
  function getNextTime(currentTime) {
    let nowTime = Number(currentTime)
    let date = nowTime + 24 * 60 * 60 * 1000
    let nextDayTime = new Date(date)
    let years = nextDayTime.getFullYear()
    let months = nextDayTime.getMonth() + 1
    let days = nextDayTime.getDate()
    let hours = nextDayTime.getHours()
    let minutes = nextDayTime.getMinutes()
    let nextTime = hours + ':' + minutes + ' ' + months + '/' + days + '/' + years
    return nextTime
  }
  if (currentTime in dailySendNums) {
    let currentNum = dailySendNums[currentTime]
    if (dailySendNums && currentNum >= FREE_DAILY_SEND_COUNT_LIMIT) {
      isReachSendLimit = true
      dailySendNums['0'] = 1
      chrome.storage.local.set({ dailySendNums: dailySendNums })
    }
  } else {
    dailySendNums[currentTime] = 0
  }
  chrome.storage.local.set({ dailySendNums: dailySendNums })
  return { isReachSendLimit, showConfirmTitle }
}

function incrDailySendNums() {
  chrome.storage.local.get(['dailySendNums'], function (res) {
    const maxTimestamp = getMaxTimestamp(res.dailySendNums)
    let dailySendNums = res.dailySendNums
    let currentSendNums = dailySendNums[maxTimestamp]
    dailySendNums[maxTimestamp] = ++currentSendNums
    chrome.storage.local.set({ dailySendNums: dailySendNums })
  })
}

function getIncrDailySendNums(dailySendNums) {
  const maxTimestamp = getMaxTimestamp(dailySendNums)
  let currentSendNums = dailySendNums[maxTimestamp]
  dailySendNums[maxTimestamp] = ++currentSendNums
  return dailySendNums
}

export { checkDailySendNums, incrDailySendNums, getIncrDailySendNums }
