const EDGE_PATTERN = /edge\/([\d.]+)|edg\/([\d.]+)/
const IE_PATTERN1 = /rv:([\d.]+)\) like gecko/
const IE_PATTERN2 = /msie ([\d.]+)/
const FIREFOX_PATTERN = /firefox\/([\d.]+)/
const CHROME_PATTERN = /chrome\/([\d.]+)/
const OPERA_PATTERN = /opera.([\d.]+)/
const SAFARI_PATTERN = /version\/([\d.]+).*safari/

function getBrowser() {
  let result = {}
  // 1. 获取UserAgent
  result.userAgent = window.navigator.userAgent
  let ua = window.navigator.userAgent.toLowerCase()
  // console.log(ua)
  // 2. 浏览器校验正则表达式
  if (regexTest(ua, EDGE_PATTERN)) {
    return getBrowserInfo(EDGE_PATTERN, 'Edge')
  }
  if (regexTest(ua, IE_PATTERN1)) {
    return getBrowserInfo(IE_PATTERN1, 'IE')
  }
  if (regexTest(ua, IE_PATTERN2)) {
    return getBrowserInfo(IE_PATTERN2, 'IE')
  }
  if (regexTest(ua, FIREFOX_PATTERN)) {
    return getBrowserInfo(FIREFOX_PATTERN, 'Firefox')
  }
  if (regexTest(ua, CHROME_PATTERN)) {
    return getBrowserInfo(CHROME_PATTERN, 'Chrome')
  }
  if (regexTest(ua, OPERA_PATTERN)) {
    return getBrowserInfo(OPERA_PATTERN, 'Opera')
  }
  if (regexTest(ua, SAFARI_PATTERN)) {
    return getBrowserInfo(SAFARI_PATTERN, 'Safari')
  }
  result.browser = ''
  result.version = '0'
  result.userAgent = ua
  return result
}

function getBrowserInfo(pattern, type) {
  let s
  let result = {}
  let ua = window.navigator.userAgent
  s = ua.toLowerCase().match(pattern)
  result.version = s[0]
  result.userAgent = ua
  result.browser = type
  return result
}

function regexTest(str, pattern) {
  return pattern.test(str)
}

export { getBrowser }
