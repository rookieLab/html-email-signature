<template>
    <span :style="nameStyle">{{ name }}&nbsp;</span>
    <a href="mailto:nicksterlin@mysignature.io" target="_blank" style="color: inherit;text-decoration: none;">
        {{ value }}
    </a>
</template>

<script>
export default {
    name: 'contact-skype',
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