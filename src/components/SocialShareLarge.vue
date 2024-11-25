<template>
    <table cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                <a href="https://www.baidu.com" target="_blank">
                    <img src="https://img.mysignature.io/addons/v2/twitter_v1_shape1_b.png" height="45" width="158"
                        alt="twitter" style="display: block;">
                </a>
            </td>
            <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                        src="https://img.mysignature.io/addons/v2/twitter_v1_shape2_b.png" height="34" width="119"
                        alt="twitter" style="display: block;"></span></td>
            <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                        src="https://img.mysignature.io/addons/v2/linkedin_v1_shape2_b.png" height="34" width="119"
                        alt="linkedin" style="display: block;"></span></td>
            <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"></td>
        </tr>
    </table>
    <table cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td v-for="icon in data" :style="_styles">
                <component :is="socialIconsMap[icon.name]" :url="icon.url" :shape="design.iconsShape"
                    :size="design.iconsSize" :color="design.iconsType === 'branded' ? undefined : design.iconsColor"
                    :background="design.iconsType === 'branded' ? undefined : design.iconsBackground" />
            </td>

        </tr>
    </table>
</template>

<script setup name="Banner">
import { ref, watch, computed, shallowRef } from 'vue'
import * as iconComponents from '@/components/svg-icon-a'

const props = defineProps({
    type: {
        type: String,
        default: 'table' // table or tr
    },
    data: {
        type: Array,
        default: []
    },
    design: {
        type: Object,
        default: {}
    },
    styles: {
        type: Object,
        default: {}
    }
})

const defaultStyle = { margin: '0.1px', padding: '0px 4px 0px 0px', color: 'rgb(0, 0, 1)', cursor: 'pointer' }
const _styles = computed(() => {
    return { ...defaultStyle, ...props.styles }
})

const socialIconsMap = ref({})
Object.values(iconComponents).map(component => (
    socialIconsMap.value[component.name] = shallowRef(component)
))

console.log('socialIconsMap', socialIconsMap, props.data)
</script>

<style scoped></style>