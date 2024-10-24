function injectScript(scriptName, scriptId) {
    // eslint-disable-next-line no-unused-vars
    return new Promise(function (resolve, reject) {
        if (document.getElementById(scriptId)) {
            return
        }
        var s = document.createElement('script')
        s.src = chrome.runtime.getURL(scriptName)
        console.log(s.src);
        s.onload = function () {
            this.parentNode.removeChild(this)
            resolve(true)
        }
        ;(document.head || document.documentElement).appendChild(s)
    })
}

function getBySelector(e) {
    return document.querySelector(e)
}

export {
    injectScript,
    getBySelector
}
