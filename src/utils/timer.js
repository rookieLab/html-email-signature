/**
 * 使用setTimeout实现的timer
 * */
class Timer {
  constructor() {
    this.timerId = null
    this.hasSetCallback = false
    this.testId = null
  }

  /**
   * 原版setTimeout的封装，直接调用
   * */
  setTimeout(callback, timer, ...params) {
    if (this.hasSetCallback) {
      console.warn(
        'The callback function has set. You could not set another callback function.'
      )
      return
    }
    this.timerId = setTimeout(callback, timer, ...params)
  }

  /**
   * 效果与原版clearTimeout类似
   * */
  clearTimeout() {
    this._clearTimeout()
  }

  /**
   * 使用setTimeout实现的setInterval方法
   * */
  setInterval(callback, time, ...params) {
    this.testId = params[0]
    if (this.hasSetCallback) {
      console.warn(
        'The callback function has set. You could not set another callback function.'
      )
      return
    }
    this.hasSetCallback = true
    const _this = this

    function repeat() {
      const id = setTimeout(
        () => {
          _this.timerId = id
          callback(...params)
          clearTimeout(id)
          if (_this.timerId) {
            repeat()
          }
        },
        time,
        ...params
      )
    }

    repeat()
  }

  /**
   * 效果与原版clearInterval类似
   * */
  clearInterval() {
    this._clearTimeout()
  }

  /**
   * 清除timerId对应的timer
   * */
  _clearTimeout() {
    if (!this.timerId) {
      return
    }
    clearTimeout(this.timerId)
    this.timerId = null
  }
}

export default Timer
