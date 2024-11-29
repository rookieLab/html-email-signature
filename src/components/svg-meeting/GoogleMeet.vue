<template>
    <div>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" :width="size * 1.4"
        :height="size * 1.4">
            <path
                d="M572.928 512l100.112 86 111.968 96.192v-359.04l-106.048 88.48L572.928 512zM48 677.328V832c0 35.36 28.48 64 63.632 64h153.76V677.328H48zM265.392 128L48 346.672h217.392V128zM265.392 346.672H48v330.656h217.392V346.672z"
                :fill="color" p-id="1306"></path>
            <path
                d="M923.936 220.592l-138.928 114.56v359.04l139.552 115.088C945.456 825.712 976 810.72 976 784V245.328c0-27.04-31.232-41.856-52.064-24.736zM572.928 512v165.328H265.392V896h456c35.152 0 63.616-28.64 63.616-64v-137.808L572.928 512zM721.392 128h-456v218.672h307.52V512l212.096-176.752V192c0-35.36-28.48-64-63.616-64z"
                :fill="color" p-id="1307"></path>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'google-meet',
    props: {
        color: {
            type: String,
            default: '#000000'
        },
        size: {
            type: Number,
            default: 20
        }
    }
};
</script>

<style scoped></style>