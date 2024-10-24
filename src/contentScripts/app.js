
import Timer from '@/utils/timer'
import initializer from "./core/initializer"

if (typeof browser === "undefined") {
  var browser = chrome;
}

export default class WAPlusApp {
  constructor({ store }) {
    this.store = store
  }

  start() {
    const timer = new Timer()
    timer.setInterval(() => {
      timer.clearInterval()
      initializer()
      this.mount()
    }, 2000)
  }

  mount() {
    // inject-js 脚本注入
    this.appendScriptTag(browser.runtime.getURL('js/inject/inject.bundle.js'))
  }

  appendScriptTag(src) {
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', src)
    scriptEl.setAttribute('type', 'text/javascript')
    document.body.appendChild(scriptEl)
  }
}
