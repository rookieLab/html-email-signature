<template>
    <!-- name: {{ calender }} icon- size: {{ props.calender?.size }} - fontSize: {{ fontSize }} - iconSize: {{ iconSize }} -->
    <table cellpadding="0" width="500"
        style="width: 500px; color: rgb(31, 31, 31);   border-collapse: collapse;" :style="{
            fontSize: fontSize, fontWeight: 'normal'
        }">
        <tr style="cursor: pointer;">

            <td width="24" height="24" align="center" style="padding: 20px 0px 0px; margin: 0.1px; ">
                <AddonAdd v-if="calender.icon === 'add'" :size="iconSize" />
                <AddonAdded v-if="calender.icon === 'added'" :size="iconSize" />
                <AddonAward v-if="calender.icon === 'award'" :size="iconSize" />
                <AddonBaceball v-if="calender.icon === 'baceball'" :size="iconSize" />
                <AddonBasketball v-if="calender.icon === 'basketball'" :size="iconSize" />
                <AddonBoard v-if="calender.icon === 'board'" :size="iconSize" />
                <AddonCalendly v-if="calender.icon === 'calendly'" :size="iconSize" />
                <AddonCinema v-if="calender.icon === 'cinema'" :size="iconSize" />
                <AddonConference v-if="calender.icon === 'conference'" :size="iconSize" />
                <AddonExhibition v-if="calender.icon === 'exhibition'" :size="iconSize" />
                <AddonFootball v-if="calender.icon === 'football'" :size="iconSize" />
                <AddonGps v-if="calender.icon === 'gps'" :size="iconSize" />
                <AddonGraduate v-if="calender.icon === 'graduate'" :size="iconSize" />
                <AddonHands v-if="calender.icon === 'hands'" :size="iconSize" />
                <AddonHeartRytm v-if="calender.icon === 'heart-rytm'" :size="iconSize" />
                <AddonList v-if="calender.icon === 'list'" :size="iconSize" />
                <AddonMatchTicket2 v-if="calender.icon === 'match-ticket2'" :size="iconSize" />
                <AddonMuseum v-if="calender.icon === 'museum'" :size="iconSize" />
                <AddonMuseumPlace v-if="calender.icon === 'museum-place'" :size="iconSize" />
                <AddonOpen v-if="calender.icon === 'open'" :size="iconSize" />
                <AddonParty v-if="calender.icon === 'party'" :size="iconSize" />
                <AddonPhoto v-if="calender.icon === 'photo'" :size="iconSize" />
                <AddonPlay v-if="calender.icon === 'play'" :size="iconSize" />
                <AddonPlayVideo v-if="calender.icon === 'play-video'" :size="iconSize" />
                <AddonRun v-if="calender.icon === 'run'" :size="iconSize" />
                <AddonSchedule v-if="calender.icon === 'schedule'" :size="iconSize" />
                <AddonScheduleCalendar v-if="calender.icon === 'schedule-calendar'" :size="iconSize" />
                <AddonSearchCalendar v-if="calender.icon === 'search-calendar'" :size="iconSize" />
                <AddonSokker v-if="calender.icon === 'sokker'" :size="iconSize" />
                <AddonSpeaker v-if="calender.icon === 'speaker'" :size="iconSize" />
                <AddonStart v-if="calender.icon === 'start'" :size="iconSize" />
                <AddonTicket v-if="calender.icon === 'ticket'" :size="iconSize" />
                <AddonTimeCalendar v-if="calender.icon === 'time-calendar'" :size="iconSize" />
                <AddonVebinar v-if="calender.icon === 'vebinar'" :size="iconSize" />
                <AddonVipTicket v-if="calender.icon === 'vip-ticket'" :size="iconSize" />
            </td>
            <td style=" padding: 20px 0px 0px 10px; margin: 0.1px;" :style="{
                fontFamily: design?.fontFamily,
                fontWeight: design?.fontWeight,
                fontSize: fontSize
            }">
                <span :style="{ color: calender?.color }">
                    {{ calender?.text }}&nbsp;
                </span>
                <a :href="calender?.link" target="_blank" style="text-decoration: none; "
                    :style="{ color: calender?.CTAColor }">
                    {{ calender?.CTA }}
                </a>
            </td>
        </tr>
    </table>

</template>

<script name="Addon-Index" setup>
import { ref, watch, computed } from 'vue'
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
    calender: {
        type: Object,
        default: () => ({})
    },
    design: {
        type: Object,
        default: () => ({})
    }
})


const fontSize = computed(() => {
    return 9.4 + props.calender?.size * 0.2 + 'px'
})

// 24 * 0.7 = 16.8
// 15.6 - 16.8 = -1.2
const iconSize = computed(() => {
    return -1.2 + props.calender?.size * 0.7
})
</script>

<style scoped></style>