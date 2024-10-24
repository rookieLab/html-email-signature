import { getBrowser } from '../browser-util'
import { EXTENSION_NAME } from '@/utils/extension-util'
let WAPLUS_CRM_INSTALL_URL_STATISTICS
let WAPLUS_SENDER_REVIEWS_URL
let WHATSAPP_SHARE_URL
let Tool_URL
let INVITE_COMMENT_URL
let LIMIT_POPUP_CRM

let browserType = getBrowser().browser
if (browserType === 'Chrome') {
  WAPLUS_CRM_INSTALL_URL_STATISTICS =
    'https://chrome.google.com/webstore/detail/waplus-crm-simple-whatsap/jmjcgjmipjiklbnfbdclkdikplgajhgc?utm_source=sender_statistics' +
    '_' +
    EXTENSION_NAME
  WAPLUS_SENDER_REVIEWS_URL =
    'https://chrome.google.com/webstore/detail/waplus-sender-whatsapp-me/lbjgmhifiabkcifnmbakaejdcbikhiaj/reviews?utm_source=adv' +
    '_' +
    EXTENSION_NAME
  WHATSAPP_SHARE_URL =
    'https://api.whatsapp.com/send?text=https://chrome.google.com/webstore/detail/waplus-sender-whatsapp-me/lbjgmhifiabkcifnmbakaejdcbikhiaj?utm_source=share' +
    '_' +
    EXTENSION_NAME
  Tool_URL =
    'https://waplus.io/whatsapp-tools/?utm_source=tools_sender_chrome' + '_' + EXTENSION_NAME
  INVITE_COMMENT_URL =
    'https://chrome.google.com/webstore/detail/waplus-sender-whatsapp-me/lbjgmhifiabkcifnmbakaejdcbikhiaj/reviews?utm_source=invite' +
    '_' +
    EXTENSION_NAME
  LIMIT_POPUP_CRM =
    'https://chrome.google.com/webstore/detail/waplus-crm-simple-whatsap/jmjcgjmipjiklbnfbdclkdikplgajhgc?utm_source=sender_50'
} else if (browserType === 'Edge') {
  WAPLUS_CRM_INSTALL_URL_STATISTICS =
    'https://microsoftedge.microsoft.com/addons/detail/waplus-crm-simple-whats/nhkkbpphaankeiolhcpmaemibkamionn?utm_source=sender_statistics' +
    '_' +
    EXTENSION_NAME
  WAPLUS_SENDER_REVIEWS_URL =
    'https://microsoftedge.microsoft.com/addons/detail/waplus-sender-whatsapp-/cjnhajfljdmnkmkgnehmfopjljmmplla?utm_source=adv' +
    '_' +
    EXTENSION_NAME
  WHATSAPP_SHARE_URL =
    'https://api.whatsapp.com/send?text=https://microsoftedge.microsoft.com/addons/detail/waplus-crm-simple-whats/nhkkbpphaankeiolhcpmaemibkamionn?utm_source=share' +
    '_' +
    EXTENSION_NAME
  Tool_URL = 'https://waplus.io/whatsapp-tools/?utm_source=tools_sender_edge' + '_' + EXTENSION_NAME
  INVITE_COMMENT_URL =
    'https://microsoftedge.microsoft.com/addons/detail/waplus-sender-whatsapp-/cjnhajfljdmnkmkgnehmfopjljmmplla?utm_source=invite' +
    '_' +
    EXTENSION_NAME
  LIMIT_POPUP_CRM =
    'https://microsoftedge.microsoft.com/addons/detail/waplus-crm-simple-whats/nhkkbpphaankeiolhcpmaemibkamionn?utm_source=sender_50'
}

export {
  WAPLUS_CRM_INSTALL_URL_STATISTICS,
  WAPLUS_SENDER_REVIEWS_URL,
  WHATSAPP_SHARE_URL,
  Tool_URL,
  INVITE_COMMENT_URL,
  LIMIT_POPUP_CRM
}
