<template>
    <div>
        <span>{{ name }}&nbsp;</span>
        <a href="mailto:nicksterlin@mysignature.io" target="_blank"
            style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">{{ value }}</a>
    </div>
</template>

<script>
export default {
    name: 'contact-email',
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        key: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped></style>