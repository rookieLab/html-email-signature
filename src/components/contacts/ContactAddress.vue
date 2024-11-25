<template>
    <span :style="nameStyle">{{ name }}&nbsp;</span>
    <span>{{ value }}</span>
</template>

<script>
export default {
    name: 'contact-address',
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        nameStyle: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<style scoped></style>