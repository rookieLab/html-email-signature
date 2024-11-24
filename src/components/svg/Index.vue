<template>
    <div>
        <AddonAdd v-if="name === 'add'" />
        <AddonAdded v-if="name === 'added'" />
        <AddonAward v-if="name === 'award'" />
        <AddonBaceball v-if="name === 'baceball'" />
        <AddonBasketball v-if="name === 'basketball'" />
        <AddonBoard v-if="name === 'board'" />
        <AddonCalendly v-if="name === 'calendly'" />
        <AddonCinema v-if="name === 'cinema'" />
        <AddonConference v-if="name === 'conference'" />
        <AddonExhibition v-if="name === 'exhibition'" />
        <AddonFootball v-if="name === 'football'" />
        <AddonGps v-if="name === 'gps'" />
        <AddonGraduate v-if="name === 'graduate'" />
        <AddonHands v-if="name === 'hands'" />
        <AddonHeartRytm v-if="name === 'heart-rytm'" />
        <AddonList v-if="name === 'list'" />
        <AddonMatchTicket2 v-if="name === 'match-ticket2'" />
        <AddonMuseum v-if="name === 'museum'" />
        <AddonMuseumPlace v-if="name === 'museum-place'" />
        <AddonOpen v-if="name === 'open'" />
        <AddonParty v-if="name === 'party'" />
        <AddonPhoto v-if="name === 'photo'" />
        <AddonPlay v-if="name === 'play'" />
        <AddonPlayVideo v-if="name === 'play-video'" />
        <AddonRun v-if="name === 'run'" />
        <AddonSchedule v-if="name === 'schedule'" />
        <AddonScheduleCalendar v-if="name === 'schedule-calendar'" />
        <AddonSearchCalendar v-if="name === 'search-calendar'" />
        <AddonSokker v-if="name === 'sokker'" />
        <AddonSpeaker v-if="name === 'speaker'" />
        <AddonStart v-if="name === 'start'" />
        <AddonTicket v-if="name === 'ticket'" />
        <AddonTimeCalendar v-if="name === 'time-calendar'" />
        <AddonVebinar v-if="name === 'vebinar'" />
        <AddonVipTicket v-if="name === 'vip-ticket'" />
    </div>
</template>

<script name="Addon-Index" setup>
import AddonAdd from './AddonAdd.vue'
import AddonAdded from './AddonAdded.vue'
import AddonAward from './AddonAward.vue'
import AddonBaceball from './AddonBaceball.vue'
import AddonBasketball from './AddonBasketball.vue'
import AddonBoard from './AddonBoard.vue'
import AddonCalendly from './AddonCalendly.vue'
import AddonCinema from './AddonCinema.vue'
import AddonConference from './AddonConference.vue'
import AddonExhibition from './AddonExhibition.vue'
import AddonFootball from './AddonFootball.vue'
import AddonGps from './AddonGps.vue'
import AddonGraduate from './AddonGraduate.vue'
import AddonHands from './AddonHands.vue'
import AddonHeartRytm from './AddonHeartRytm.vue'
import AddonList from './AddonList.vue'
import AddonMatchTicket2 from './AddonMatchTicket2.vue'
import AddonMuseum from './AddonMuseum.vue'
import AddonMuseumPlace from './AddonMuseumPlace.vue'
import AddonOpen from './AddonOpen.vue'
import AddonParty from './AddonParty.vue'
import AddonPhoto from './AddonPhoto.vue'
import AddonPlay from './AddonPlay.vue'
import AddonPlayVideo from './AddonPlayVideo.vue'
import AddonRun from './AddonRun.vue'
import AddonSchedule from './AddonSchedule.vue'
import AddonScheduleCalendar from './AddonScheduleCalendar.vue'
import AddonSearchCalendar from './AddonSearchCalendar.vue'
import AddonSokker from './AddonSokker.vue'
import AddonSpeaker from './AddonSpeaker.vue'
import AddonStart from './AddonStart.vue'
import AddonTicket from './AddonTicket.vue'
import AddonTimeCalendar from './AddonTimeCalendar.vue'
import AddonVebinar from './AddonVebinar.vue'
import AddonVipTicket from './AddonVipTicket.vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

</script>

<style scoped></style>