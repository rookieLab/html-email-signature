<template>
    <td :style="_styles" :valign="valign" :align="align">
        <a :href="data.avatarLink" target="_blank">
            <img alt="SignMaker" :src="data.avatarImg" style="display: block;" :style="{ minWidth: data.avatarWidth }"
                :width="data.avatarWidth" /></a>
    </td>
</template>

<script setup name="Avatar">
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
    },
    align: {
        type: String,
        default: 'top' // top or center
    },
    valign: {
        type: String,
        default: 'top' // top or middle
    }
})

const defaultTdStyle = { margin: '0.1px', padding: '0px', cursor: 'pointer' }
const _styles = computed(() => {
    return { ...defaultTdStyle, ...props.styles }
})
</script>

<style scoped></style>