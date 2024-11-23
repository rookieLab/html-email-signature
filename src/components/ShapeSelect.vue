<template>
    <div class="">
        <span class="m-shapes l-dp-flex e--va-center e--gap-none u-wd-60p">

            <div class="m-shapes__icon u-mr-r2 shape-square" :class="{ active: shape === 'square' }"
                @click="shape = 'square'"></div>
            <div class="m-shapes__icon u-mr-r2 shape-rounded" :class="{ active: shape === 'rounded' }"
                @click="shape = 'rounded'"></div>
            <div class="m-shapes__icon u-mr-r2 shape-circle" :class="{ active: shape === 'circle' }"
                @click="shape = 'circle'"></div>
        </span>

    </div>
</template>
<script name="Font-Select" setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: 'square'
    }
})

const emit = defineEmits(['update:modelValue'])

const shape = ref(props.modelValue)
const handleChange = (val) => {
    // console.log('shape', val)
    emit('update:modelValue', val)
}

// Watch for modelValue changes from parent
watch(() => props.modelValue, (newVal) => {
    // console.log('shape watch triggered:', newVal)
    shape.value = newVal
})

// Watch for local shape changes
watch(shape, (newVal) => {
    // console.log('shape changed:', newVal)
    handleChange(newVal)
})

</script>
<style scoped>
.m-shapes__icon {
    width: 20px;
    height: 20px;
    border: solid #7485a3 1px;
}

.m-shapes__icon.active {
    background-color: #000;
    border-color: black;
}

.shape-square {
    border-radius: 0;
}

.shape-rounded {
    border-radius: 25%;
}

.shape-circle {
    border-radius: 50%;
}
</style>
