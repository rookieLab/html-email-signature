import { t as r } from "./browser-CvUyNmMM.js";


chrome.action.onClicked.addListener(() => { chrome.runtime.openOptionsPage() });
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({ id: "pdf-signature-menu", title: "Sign this PDF", type: "normal", contexts: ["link"], targetUrlPatterns: ["*://*/*.pdf"] })
});


chrome.contextMenus.onClicked.addListener(async e => {
    const { menuItemId: t, linkUrl: n } = e;
    t === "pdf-signature-menu" && (
        chrome.runtime.openOptionsPage(), chrome.storage.local.set({ linkUrl: n }))
});


chrome.runtime.onInstalled.addListener(e => {
    switch (e.reason) {
        case chrome.runtime.OnInstalledReason.INSTALL:
            r({ url: "https://chrome-extensions.tilda.ws/sign-pdf" }),
                chrome.runtime.setUninstallURL("https://forms.gle/ZaEMrKHP2BDXG2wh8");
            break
    }
});
