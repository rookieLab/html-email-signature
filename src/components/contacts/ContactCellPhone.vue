<template>
    <div>
        <span>{{ name }}&nbsp;</span>
        <a href="tel:phone" target="_blank"
            style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">{{ value }}</a>
    </div>
</template>

<script>
export default {
    name: 'contact-cellphone',
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