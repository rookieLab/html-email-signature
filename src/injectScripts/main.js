

import { INJECT_BTN_GOOGLE_EMAIL } from "@/service/constants"

let observers = {}
let channel = null
const observeConfig = { childList: true, subtree: true }


function mutationCallBack(mutations) {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
            // localName 是 HTML 标签名称，例如 'div', 'span', 'ytd-comment-dialog-renderer' 等
            // const localName = mutation.target.localName
            handleMutationTarget(mutation.target)
        }
    })
}

function createObserver() {
    // 清理旧的监听
    clearObserve()

    // 检查是否完成懒加载
    const checkAndInit = () => {
        channel = getChannelByUrl()
        if (!scheduler[channel]) return
        scheduler[channel]().then((targetNodeV) => {
            console.log('checkAndInit')
            // 页面第一次就存在target，无需监听页面变化
            if (!targetNodeV) {
                return
            }
            let mutationObserverV = new MutationObserver(mutationCallBack)
            // 启动监听
            mutationObserverV.observe(targetNodeV, observeConfig)
            observers[channel] = mutationObserverV
        }).catch(err => {
            console.error('Observer error:', err)
            setTimeout(checkAndInit, 500)
        })
    }
    checkAndInit()
}

function handleGoogle() {
    return new Promise((resolve, reject) => {
        // 获取注入节点   document.querySelector("div.dw div.no")
        const targetNodeV = document.querySelector("body")
        if (!targetNodeV) {
            reject(new Error('Google mail page not loaded'))
            return
        }
        // 页面第一次就存在target，无需监听页面变化
        const target = document.querySelector("td.gU.aYL")
        if (target) {
            handleMutationTarget(target, true)
            resolve(null)
        }
        resolve(targetNodeV)
    })

}
const scheduler = {
    "google": handleGoogle
}

function getChannelByUrl() {
    let url = location.href
    if (url.startsWith("https://mail.google.com/mail")) {
        return "google"
    }
}

function handleMutationTarget(target, direct = false) {
    if (direct || (channel === 'google' && target.localName === 'td')) {

        if (!target.classList.contains('gU') || !target.classList.contains('aYL')) {
            return
        }

        // 初始化注入的dom节点
        const container = initContainer(INJECT_BTN_GOOGLE_EMAIL)
        target.insertBefore(container, target.children[1])
        // inject消息发送到content，将Vue组件注入

        window.postMessage({
            type: 'FROM_INJECT',
            action: 'INJECT_COMPONENT',
            payload: {
                containerId: INJECT_BTN_GOOGLE_EMAIL
            }
        }, '*')

    }
}


function clearObserve() {
    Object.values(observers).forEach(observer => {
        observer.disconnect()
    })
    observers = {}
}


function initContainer(domId) {
    const container = document.createElement('div')
    container.setAttribute('id', domId)
    return container
}

// 初始化监听器
createObserver()
console.log('inject finish')
