<template>
    <div>
        <svg viewBox="0 0 922 1024" xmlns="http://www.w3.org/2000/svg" :style="{ width: size }">
            <path
                d="M68.266 0c18.85 0 34.134 15.283 34.134 34.134v0 583.408c20.383 7.208 34.042 26.442 34.134 48.058v0 307.2c0 28.275-22.925 51.2-51.2 51.2v0h-34.134c-28.275 0-51.2-22.925-51.2-51.2v0-307.2c0.092-21.617 13.75-40.85 34.134-48.058v0-583.408c0-18.85 15.283-34.134 34.133-34.134zM904.534 34.134c9.425 0 17.066 7.642 17.066 17.066v0 477.866c0 9.425-7.642 17.067-17.066 17.067v0h-750.934c-9.425 0-17.066-7.642-17.066-17.067v0-477.866c0-9.425 7.642-17.066 17.066-17.066v0zM887.466 290.134h-358.4v221.866h358.4v-221.866zM529.066 68.266h-358.4v221.867h358.4v-221.867z"
                fill="#017de8"></path>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'addon-start',
    props: {
        size: {
            type: Number,
            default: 22.1
        }
    }
};
</script>

<style scoped></style>