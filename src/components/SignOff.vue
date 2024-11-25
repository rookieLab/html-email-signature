<template>
    <table cellpadding="0" style="border-collapse: collapse;" v-if="data.img">
        <tr>
            <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                <img width="500" :src="data.img" alt="Regards,">
            </td>
        </tr>
    </table>
</template>

<script setup name="SignOff">
import { ref, watch, computed } from 'vue'
import ContactIndex from './contacts/Index.vue'

const props = defineProps({
    layout: {
        type: String,
        default: 'column' // table or tr
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
    },
    templateStyle: {
        type: Object,
        default: {}
    }
})

// const contactArray = computed(() => {
//     return props.data.filter((contact) => {
//         return contact.value !== ''
//     })
// })

// const defaultTdStyle = { margin: '0.1px', padding: '5px 20px', color: '#000001', borderBottom: '1px solid rgb(235, 228, 228)' }

// const _styles = computed(() => {
//     return { ...defaultTdStyle, ...props.styles }
// })
</script>

<style scoped></style>