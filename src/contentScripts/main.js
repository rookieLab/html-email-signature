
import WAPlusApp from './app'
import App from '@/pages/App.vue'
import Icon from '@/components/Icon.vue'
import pinia from '@/stores'
import { useInjectStore } from '@/stores'
import { createApp } from 'vue'
import { i18n } from '@/i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { INJECT_APP_ID, INJECT_BTN_GOOGLE_EMAIL } from '@/service/constants.js'

var injectStore = undefined

// 注入inject
const injectApp = () => {
    console.log('injectApp')
    const waApp = new WAPlusApp({})
    waApp.start()


    const div = document.createElement("div");
    div.id = INJECT_APP_ID
    // const shadowRoot = div.attachShadow({ mode: 'open' });
    document.body.appendChild(div);

    const app = createApp(App)
    app.use(pinia);
    app.use(i18n)
    app.use(ElementPlus)
    app.mount('#' + INJECT_APP_ID)
}



document.addEventListener('click', function (e) {
    let isSelf = document.getElementById(INJECT_APP_ID).contains(e.target)  // 这个是自己的区域
    if (!isSelf) {
        chrome.runtime.sendMessage({ closeIndex: true }, function (data) { })
    }
})


window.addEventListener('load', async () => {
    try {

        // 发送当前 URL 到 popup.js
        const currentUrl = window.location.href; // 获取当前 URL
        console.log('页面加载完成，当前 URL:', currentUrl);
        chrome.runtime.sendMessage({ type: 'urlLoaded', url: currentUrl });
        injectApp()
    } catch (error) {
        console.error(error)
    }
});


// content_script.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Content onMessage received1:', message);
    if (message.action === 'douyin:upload:video') {
        console.log('Received request to upload video with file name:', message.fileName);

    }
    if (message.action === "savedTemplatesResponse") {
        console.log("savedTemplatesResponse", message.data)
        injectStore.savedTemplates = message.data
    }
})

window.addEventListener('message', function (event) {
    // 验证消息来源是否是当前窗口，且消息类型正确
    console.log('Content script received1:', event.data);
    // 确保消息来源可信
    if (event.data.type === 'FROM_INJECT') {
        if (event.data.action === 'INJECT_COMPONENT') {
            // 处理注入组件的逻辑
            const containerId = event.data.payload.containerId;
            const app = createApp(Icon);
            app.mount('#' + containerId);
        }
        if (event.data.action === 'MORE_SIGNATURE') {
            console.log('MORE_SIGNATURE')
            chrome.runtime.sendMessage({
                action: 'MORE_SIGNATURE'
            });
        }
        if (event.data.action === "getSavedTemplates") {


            if (!injectStore) {
                injectStore = useInjectStore()
                console.log("injectStore", injectStore.getSavedTemplates())
            }

            console.log('content getSavedTemplates')
            chrome.runtime.sendMessage({
                action: 'getSavedTemplates'
            });
        }
    }

    if (event.data.to === "background") {
        chrome.runtime.sendMessage(event.data, () => { });
        return
    }
});