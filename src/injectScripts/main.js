

import { INJECT_BTN_GOOGLE_EMAIL, INJECT_BTN_YAHOO_EMAIL, INJECT_BTN_OUTLOOK_EMAIL } from "@/service/constants"

let observers = {}
let channel = null
const observeConfig = { childList: true, subtree: true }


function mutationCallBack(mutations) {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
            // localName 是 HTML 标签名称，例如 'div', 'span', 'ytd-comment-dialog-renderer' 等
            // const localName = mutation.target.localName
            if (channel == 'outlook') {
                return handleOutlookMutationTarget(mutation.target)
            } else if (channel == 'yahoo') {
                return handleYahooMutationTarget(mutation.target)
            }
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

function handleYahoo() {
    return new Promise((resolve, reject) => {
        // 获取注入节点   document.querySelector("div.dw div.no")
        const targetNodeV = document.querySelector("body")
        if (!targetNodeV) {
            reject(new Error('Yahoo mail page not loaded'))
            return
        }
        // 页面第一次就存在target，无需监听页面变化
        const target = document.querySelector("div[data-test-id='compose-toolbar'] div[data-test-id='focus-group'] div.D_F.ek_EZ.ab_C")
        if (target) {
            handleYahooMutationTarget(target, true)
            resolve(targetNodeV)
        }
        resolve(targetNodeV)
    })

}

function handleOutlook() {
    return new Promise((resolve, reject) => {
        // 获取注入节点   document.querySelector("div.dw div.no")
        const targetNodeV = document.querySelector("body")
        if (!targetNodeV) {
            reject(new Error('Outlook mail page not loaded'))
            return
        }
        // 页面第一次就存在target，无需监听页面变化
        const target = document.querySelector("div.ocwZc")
        if (target) {
            handleOutlookMutationTarget(target, true)
            resolve(null)
        }
        resolve(targetNodeV)
    })

}

const scheduler = {
    "google": handleGoogle,
    "yahoo": handleYahoo,
    "outlook": handleOutlook,
}

function getChannelByUrl() {
    let url = location.href
    if (url.startsWith("https://mail.google.com/mail")) {
        return "google"
    }
    if (url.startsWith("https://mail.yahoo.com/n")) {
        return "yahoo"
    }
    if (url.startsWith("https://outlook.live.com/mail")) {
        return "outlook"
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

function handleYahooMutationTarget(target, direct = false) {
    if (target.querySelector('#'+INJECT_BTN_YAHOO_EMAIL)) {
        return
    }
    if (direct == false && target.getAttribute("data-test-id") == "novation-main-content") {
        target = target.querySelector("div[data-test-id='compose-toolbar'] div[data-test-id='focus-group'] div.D_F.ek_EZ.ab_C")
        if (!target) {
            return
        }
    }
    if (direct || (channel === 'yahoo' && target.localName === 'div')) {
        if (!target.classList.contains('D_F') || !target.classList.contains('ek_EZ') || !target.classList.contains('ab_C')) {
            return
        }

        // 初始化注入的dom节点
        const container = initContainer(INJECT_BTN_YAHOO_EMAIL)
        target.insertBefore(container, target.children[target.children.length-1])
        // inject消息发送到content，将Vue组件注入

        window.postMessage({
            type: 'FROM_INJECT',
            action: 'INJECT_COMPONENT_YAHOO',
            payload: {
                containerId: INJECT_BTN_YAHOO_EMAIL
            }
        }, '*')

    }
}

function handleOutlookMutationTarget(target, direct = false) {
    if (target.querySelector('#'+INJECT_BTN_OUTLOOK_EMAIL)) {
        return
    }
    if (direct == false && target.classList.contains('cBeRi') && target.classList.contains('dMm6A') && target.classList.contains('AiSsJ')) {
        target = target.querySelector("div.ocwZc")
        if (!target) {
            return
        }
    }
    if (direct || (channel === 'outlook' && target.localName === 'div')) {
        if (!target.classList.contains('ocwZc')) {
            return
        }

        // 初始化注入的dom节点
        const container = initContainer(INJECT_BTN_OUTLOOK_EMAIL)
        target.insertBefore(container, target.lastChild.nextSibling)
        // inject消息发送到content，将Vue组件注入

        window.postMessage({
            type: 'FROM_INJECT',
            action: 'INJECT_COMPONENT_OUTLOOK',
            payload: {
                containerId: INJECT_BTN_OUTLOOK_EMAIL
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
