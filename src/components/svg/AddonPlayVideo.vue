<template>
    <div>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :style="{ width: size }">
            <path
                d="M512 0c-282.766 0-512 229.23-512 512s229.234 512 512 512c282.766 0 512-229.23 512-512s-229.234-512-512-512zM688.96 539.14l-256 160c-5.18 3.234-11.070 4.86-16.96 4.86-5.336 0-10.68-1.328-15.516-4.016-10.172-5.64-16.484-16.344-16.484-27.984v-320c0-11.64 6.312-22.344 16.484-27.984 10.172-5.672 22.61-5.328 32.476 0.844l256 160c9.352 5.86 15.040 16.11 15.040 27.14s-5.688 21.282-15.040 27.14z"
                fill="#017de8"></path>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'addon-play-video',
    props: {
        size: {
            type: Number,
            default: 22.1
        }
    }
};
</script>

<style scoped></style>