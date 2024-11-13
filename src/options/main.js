import { createApp } from 'vue'
import { i18n } from '@/i18n'
import App from './App.vue'
import pinia from '@/stores'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


async function bootstrap() {
    const app = createApp(App)
    app.use(i18n)
    app.use(pinia);
    app.use(ElementPlus)
    app.mount('#app')

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}
bootstrap();


