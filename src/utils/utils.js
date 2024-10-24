// utils.js

const Utils = (() => {
    function base64ToFile(base64Data, fileName) {
        // 去掉 Base64 的头部信息，例如 "data:image/png;base64,"
        const arr = base64Data.split(',');
        const mime = arr[0].match(/:(.*?);/)[1]; // 提取文件类型（MIME 类型）
        const bstr = atob(arr[1]); // Base64 解码
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n); // 转换为字节数组
        }

        // 使用 Blob 创建 File 对象
        return new File([u8arr], fileName, { type: mime });
    }

    function waitForElement(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            const interval = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(interval);
                    resolve(element);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(interval);
                    reject(new Error("Element not found within timeout"));
                }
            }, 100); // 检查间隔
        });
    }
    function reloadOrOpenURL(targetURL, timeout = 10000) {
        let timeoutID = null
        return new Promise((resolve, reject) => {
            // 获取当前窗口中激活的标签页
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                let activeTab = tabs[0]; // 当前激活的标签页
                if (activeTab && activeTab.url) {
                    // 检查激活标签页的 URL 是否等于目标 URL
                    if (activeTab.url === targetURL) {
                        // 如果 URL 匹配，刷新页面
                        chrome.tabs.reload(activeTab.id, () => {
                            console.log(`Refreshed the page: ${targetURL}`);
                            clearTimeout(timeoutID)
                            resolve(activeTab.id)
                        });
                    } else {
                        // 如果 URL 不匹配，先关闭当前标签页
                        // chrome.tabs.remove(activeTab.id, () => {
                        //     console.log(`Closed the tab with URL: ${activeTab.url}`);
                        // });

                        // 打开新的标签页加载目标 URL
                        chrome.tabs.create({ url: targetURL }, (newTab) => {
                            console.log(`Opened a new tab with URL: ${targetURL}`);
                            clearTimeout(timeoutID)
                            resolve(newTab.id)
                        });
                    }
                } else {
                    // 如果没有找到激活的标签页，直接打开新的标签页
                    chrome.tabs.create({ url: targetURL }, (newTab) => {
                        console.log(`Opened a new tab with URL: ${targetURL}`);
                        clearTimeout(timeoutID)
                        resolve(newTab.id)
                    });
                }
            });


            // 超时后移除监听器，避免长时间不响应
            timeoutID = setTimeout(() => {
                reject(`Timeout: Did not receive URL ${url} from content.js within ${timeout / 1000} seconds`);
            }, timeout);
        });
    }




    // 封装 waitForURL 函数
    function waitForURL(url, timeout = 10000) {
        let tabId = null;
        let timeoutID = null
        return new Promise(async (resolve, reject) => {
            function listener(message, sender, sendResponse) {
                if (message.type === 'urlLoaded' && message.url === url) {
                    console.log('Received URL from content.js:', message.url, tabId);
                    chrome.runtime.onMessage.removeListener(listener); // 收到消息后移除监听器
                    clearTimeout(timeoutID)
                    resolve(tabId); // 当收到消息时，解析 Promise 并返回 URL
                }
            }
            chrome.runtime.onMessage.addListener(listener);
            tabId = await reloadOrOpenURL(url)


            // 超时后移除监听器，避免长时间不响应
            timeoutID = setTimeout(() => {
                chrome.runtime.onMessage.removeListener(listener);
                reject(`Timeout: Did not receive URL ${url} from content.js within ${timeout / 1000} seconds`);
            }, timeout);
        });
    }


    async function setInputFiles(locator, file) {
        // 在内容脚本中重新创建 File 对象
        // const byteString = atob(fileData.split(',')[1]); // 解码 base64
        // const mimeString = fileData.split(',')[0].split(':')[1].split(';')[0];

        // const ab = new ArrayBuffer(byteString.length);
        // const ia = new Uint8Array(ab);
        // for (let i = 0; i < byteString.length; i++) {
        //     ia[i] = byteString.charCodeAt(i);
        // }

        // // 创建 Blob 对象
        // const blob = new Blob([ab], { type: mimeString });
        // const file = new File([blob], fileName, { type: fileType });

        // 找到文件输入框并设置文件
        const inputFile = document.querySelector(locator);
        if (inputFile) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            inputFile.files = dataTransfer.files;

            // 触发文件上传的 change 事件
            const event = new Event('change', { bubbles: true });
            inputFile.dispatchEvent(event);

            console.log(`正在上传文件：${file.name}`);
        } else {
            console.error(`未找到文件输入框。document.querySelector(${locator})`);
        }
    }
    async function waitForCompletion(isCompleted, isFailed, timeout = 60000) {
        const start = Date.now();

        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                if (isCompleted()) {
                    console.log("[-] 视频上传完毕");
                    clearInterval(checkInterval);
                    resolve();  // 上传完成，解析 Promise
                } else if (isFailed()) {
                    console.log("[-] 发现上传出错了... 准备重试");
                    reject('waitForCompletion')
                } else if (Date.now() - start >= timeout) {
                    console.log("[-] 上传超时");
                    clearInterval(checkInterval);
                    reject(new Error("上传超时"));  // 超时，拒绝 Promise
                } else {
                    console.log("[-] 正在上传视频中...");
                }
            }, 2000);  // 每隔 2 秒检查一次
        });
    }
    function waitForSelector(selector, timeout) {
        return new Promise((resolve, reject) => {
            const start = Date.now();

            const checkInterval = setInterval(() => {
                if (document.querySelector(selector)) {
                    clearInterval(checkInterval);
                    resolve();  // 选择器加载成功
                } else if (Date.now() - start >= timeout) {
                    clearInterval(checkInterval);
                    reject(new Error("等待选择器超时"));
                }
            }, 100);  // 每 100 毫秒检查一次
        });
    }
    function waitForTimeout(timeout = 1000) {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    return {
        waitForURL,
        setInputFiles,
        waitForCompletion,
        reloadOrOpenURL,
        waitForElement,
        base64ToFile
    };
})();

// 导出 Utils 模块
export default Utils;
