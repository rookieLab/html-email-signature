<template>
    <div class="m-color-picker">
        <div class="color-picker-wrapper">
            <input type="color" :value="modelValue" @input="handleChange($event.target.value)" class="color-input" />
            <div class="color-preview" :style="{ backgroundColor: modelValue }"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '#000000'
    }
})

const emit = defineEmits(['update:modelValue'])

const colorValue = ref(props.modelValue)


const handleChange = (val) => {
    emit('update:modelValue', val)
}

// Watch for modelValue changes from parent
watch(() => props.modelValue, (newVal) => {
    // console.log('shape watch triggered:', newVal)
    colorValue.value = newVal
})

// Watch for local shape changes
watch(colorValue, (newVal) => {
    // console.log('shape changed:', newVal)
    handleChange(newVal)
})

</script>

<style scoped>
:deep(.m-color-picker .el-color-picker__trigger) {
    border-radius: 100px;
    border: solid 1px #000;
}

:deep(.m-color-picker .el-color-picker__trigger .el-color-picker__color) {
    display: none;
}
</style>