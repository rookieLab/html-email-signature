<template>
    <table cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td v-for="item in providers" :style="_styles">
                <a :href="item.link" target="_blank">
                    <img :src="item.img" :height="data.size" :width="data.size * 3.5" :alt="item.name"
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

const defaultStyle = { margin: '0.1px', padding: '17px 4px 4px 0px', color: 'rgb(0, 0, 1)', cursor: 'pointer' }
const _styles = computed(() => {
    return { ...defaultStyle, ...props.styles }
})

const providers = computed(() => {
    console.log("data?.providers", props.data?.providers)
    return props.data?.providers?.filter(item => item.link)
})


</script>

<style scoped></style>