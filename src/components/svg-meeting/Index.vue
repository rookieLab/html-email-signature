<template>
    <div>
        <IconVideo v-if="name === 'zoom'" :color="color" :size="size" />
        <GoogleMeet v-if="name === 'google-meet'" :color="color" :size="size" />
        <IconSkype v-if="name === 'skype'" :color="color" :size="size" />
        <MicrosoftTeams v-if="name === 'microsoft-teams'" :color="color" :size="size" />
    </div>
</template>

<script name="IconsMeet" setup>
import GoogleMeet from './GoogleMeet.vue'
import IconSkype from './IconSkype.vue'
import IconVideo from './IconVideo.vue'
import MicrosoftTeams from './MicrosoftTeams.vue'
import { ref, watch } from 'vue'

const props = defineProps({
    name: {
        type: String,
        default: 'zoom'
    },
    color: {
        type: String,
        default: '#000000'
    },
    size: {
        type: Number,
        default: 20
    }
})

</script>

<style scoped></style>