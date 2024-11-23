<template>
    <div>
        <svg t="1732344832151" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1014" width="20" height="20">
            <path
                d="M896 305.066667a72.533333 72.533333 0 0 0-78.933333 12.8l-91.733334 85.333333V341.333333a128 128 0 0 0-128-128H213.333333a128 128 0 0 0-128 128v341.333334a128 128 0 0 0 128 128h384a128 128 0 0 0 128-128v-61.866667l92.16 85.333333a74.24 74.24 0 0 0 49.493334 19.2 71.68 71.68 0 0 0 29.44-6.4 68.266667 68.266667 0 0 0 42.666666-63.146666V368.213333A68.266667 68.266667 0 0 0 896 305.066667z"
                :fill="color"></path>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'icon-video',
    props: {
        color: {
            type: String,
            default: '#000000'
        }
    }
};
</script>

<style scoped></style>