<template>
    <template v-if="type === 'table'">
        <table v-if="data.bannerImg" width="500" cellspacing="0" cellpadding="0" border="0">
            <tr>
                <td :style="_styles">
                    <a :href="data.bannerLink" target="_blank">
                        <img :src="data.bannerImg" valign="top" :width="data.bannerWidth"
                            alt="created with signmaker.io" style="display: block;">
                    </a>
                </td>
            </tr>
        </table>
    </template>
    <template v-else>
        <tr v-if="data.bannerImg">
            <td :style="_styles">
                <a :href="data.bannerLink" target="_blank">
                    <img :src="data.bannerImg" valign="top" :width="data.bannerWidth" alt="created with signmaker.io"
                        style="display: block;">
                </a>
            </td>
        </tr>
    </template>
</template>

<script setup name="Banner">
import { ref, watch, computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'table' // table or tr
    },
    data: {
        type: Object,
        default: {}
    },
    styles: {
        type: Object,
        default: {}
    }
})

const defaultTdStyle = { margin: '0.1px', paddingTop: '10px', cursor: 'pointer' }
const _styles = computed(() => {
    return { ...defaultTdStyle, ...props.styles }
})
</script>

<style scoped></style>