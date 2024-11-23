<template>
    <div>
        <IconVideo v-if="name === 'zoom'" :color="color" />
        <GoogleMeet v-if="name === 'google-meet'" :color="color" />
        <IconSkype v-if="name === 'skype'" :color="color" />
        <MicrosoftTeams v-if="name === 'microsoft-teams'" :color="color" />
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
    }
})

</script>

<style scoped></style>