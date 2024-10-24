import { createI18n } from "vue-i18n"

import en from './en'
import zh from './zh'
import ar from './ar'
import id from './id'
import pt from './pt'
import pt_BR from './pt_BR'
import zh_TW from './zh_TW'

export const messages = {
    en,
    zh,
    ar,
    id,
    pt,
    pt_BR,
    zh_TW
}

export const i18n = createI18n({
    messages,
    locale: navigator.language || 'en',
    fallbackLocale: 'en',
})

