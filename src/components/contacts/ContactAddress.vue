<template>
    <div>
        <span>{{ name }}&nbsp;</span>
        <span style="color: rgb(0, 0, 1);">{{ value }}</span>
    </div>
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
        }
    }
};
</script>

<style scoped></style>