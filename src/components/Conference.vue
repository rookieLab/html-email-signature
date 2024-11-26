<template>
    <table cellpadding="0" style="border-collapse: collapse;" width="500">
        <tr>
            <td style="padding: 20px 0px 0px; margin: 0.1px; cursor: pointer;">
                <a :href="data.url" target="_blank" :style="meetStyle" style="
                    display: flex;
                    gap: 10px;
                    padding: 10px;
                    display: inline-flex;
                    font-weight: 800;
                ">
                    <IconsMeet :name="data.type" :color="data.color" />
                    <span> {{ data.text }}</span>
                </a>
            </td>
        </tr>
    </table>
</template>

<script setup name="Banner">
import { ref, watch, computed, shallowRef } from 'vue'
import IconsMeet from '@/components/svg-meeting/Index'
import jsonData from '@/stores/data.json'

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


const meetStyle = computed(() => {
    let fontName = props.data.font || "Arial"
    let shapemap = {
        square: '0px',
        rounded: '5px',
        circle: '30px'
    }
    return {
        color: props.data.color,
        fontFamily: jsonData.fontList[fontName],
        marginTop: props.data.top + 'px',
        backgroundColor: props.data.bgcolor,
        borderRadius: shapemap[props.data.shape]
    }
})


</script>

<style scoped></style>