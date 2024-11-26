<template>
    <span :style="nameStyle" v-if="name">{{ name }}&nbsp;</span>
    <a href="tel:phone value" target="_blank" style="color: inherit;text-decoration: none;">{{ value }}</a>

</template>

<script>
export default {
    name: 'contact-phone',
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