function getCurrentTimeData() {
  //获取当前时间并打印
  var _this = this
  let yy = new Date().getFullYear()
  let mm = new Date().getMonth() + 1
  let dd = new Date().getDate()
  let hh = new Date().getHours()
  let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
  let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
  // _this.gettime = yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss;
  // console.log(_this.gettime)
  return { yy, mm, dd, hh, mf, ss }
}

function formatTime(timestamp) {
  //获取年月日，时间
  let date = new Date(timestamp * 1000)
  let year = date.getFullYear()
  let mon = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  let data = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  return year + '-' + mon + '-' + data + ' ' + hour + ':' + min
}

function getTimeYYYYMMDD() {
  const { yy, mm, dd, hh, mf, ss } = getCurrentTimeData()
  return yy + mm + dd
}

function getTimestamp() {
  return new Date().getTime()
}

export { getTimeYYYYMMDD, getTimestamp, formatTime }
