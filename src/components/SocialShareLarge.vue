<template>
    <table cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td v-for="item in _data" :style="_styles">
                <a :href="item.link" target="_blank">
                    <img :src="item.img" :height="data.badgeSize" :width="data.badgeSize * 3.3" :alt="item.name"
                        style="display: block;">
                </a>
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
        type: Object,
        default: {}
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

const defaultStyle = { margin: '0.1px', padding: '16px 4px 4px 0px', color: 'rgb(0, 0, 1)', cursor: 'pointer' }
const _styles = computed(() => {
    return { ...defaultStyle, ...props.styles }
})

const _data = computed(() => {
    let shape = props.data.badgeShape || 'square'
    if (shape === 'rounded') {
        return props.data.data.map(item => {
            item.img = item.img.replace('shape1', 'shape2')
            return item
        })
    }
    else if (shape === 'circle') {
        return props.data.data.map(item => {
            item.img = item.img.replace('shape1', 'shape3')
            return item
        })
    }
    return props.data.data
})


const socialIconsMap = ref({})
Object.values(iconComponents).map(component => (
    socialIconsMap.value[component.name] = shallowRef(component)
))

// console.log('socialIconsMap', socialIconsMap, props.data)
</script>

<style scoped></style>