<template>
    <span :style="nameStyle">{{ name }}&nbsp;</span>
    <a href="https://baidu.com" target="_blank" style="color: inherit;text-decoration: none;">
        {{ value  }}
    </a>&nbsp;&nbsp;
</template>

<script>
export default {
    name: 'contact-website',
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