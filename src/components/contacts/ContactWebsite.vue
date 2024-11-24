<template>
    <div>
        <span>{{ name }}&nbsp;</span>
        <a href="https://baidu.com" target="_blank"
            style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">{{ value }}</a>&nbsp;&nbsp;
    </div>
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
        }
    }
};
</script>

<style scoped></style>