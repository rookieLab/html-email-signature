<template>
    <div class="m-select">
        <div class="m-select__active e--round"
            @click="$event.currentTarget.nextElementSibling.classList.toggle('u-hide')">
            <span class="m-select__trim u-display-flex u-ws-nowrap u-of-hidden u-maxwd-16@xl"
                :style="`font-family: ${selectFont?.value};`">
                {{ selectFont.name }}
            </span>

        </div>
        <div class="m-select__list u-hide" id="m-select__list">
            <div class="u-fz-20 m-select__item" v-for="font in fontList" :key="font.name"
                @click="handleSelectFont($event, font)">
                <span class="m-select__trim u-display-flex u-ws-nowrap u-of-hidden u-maxwd-16@xl"
                    :style="`font-family: ${font.value};`">
                    {{ font.name }}</span>

            </div>

        </div>
    </div>
</template>
<script name="Font-Select" setup>
import { provide, ref, reactive, watch } from 'vue'

const selectFont = ref({ name: 'Arial', value: 'Arial, Helvetica, sans-serif' })
const fontList = [
    { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
    { name: 'Arial Black', value: "'Arial Black', Gadget, sans-serif" },
    { name: 'Comic Sans MS', value: "'Comic Sans MS', cursive, sans-serif" },
    { name: 'Courgette', value: 'Courgette' },
    { name: 'Courier New', value: "'Courier New', Courier, monospace" },
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Grand Hotel', value: "'Grand Hotel'" },
    { name: 'Great Vibes', value: "'Great Vibes'" },
    { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
    { name: 'Lucida Console', value: "'Lucida Console', Monaco, monospace" },
    { name: 'Lucida Sans Unicode', value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" },
    { name: 'Ma Shan Zheng', value: "'Ma Shan Zheng'" },
    { name: 'Merienda', value: 'Merienda' },
    { name: 'Nothing You Could Do', value: "'Nothing You Could Do'" },
    { name: 'Palatino Linotype', value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" },
    { name: 'Parisienne', value: 'Parisienne' },
    { name: 'Sacramento', value: 'Sacramento' },
    { name: 'Sedgwick Ave', value: "'Sedgwick Ave'" },
    { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
    { name: 'Times New Roman', value: "'Times New Roman', Times, serif" },
    { name: 'Trebuchet MS', value: "'Trebuchet MS', Helvetica, sans-serif" },
    { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
]


// 暴露一個change事件給父組件
const emit = defineEmits(['change'])
const handleSelectFont = (e, font) => {
    selectFont.value = font
    document.getElementById('m-select__list').classList.add('u-hide')
    emit('change', font)
}

</script>