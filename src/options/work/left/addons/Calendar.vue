<template>
    <div class="o-editor-accordion__description e--addon" style="">
        <div class="m-addon-icons u-mr-b2">
            <span v-for="addon in addons" class="m-addon-icons__item u-fz-20"
                :class="{ 'e--active': addonActive === addon, [`icon_addon-${addon}`]: true }"
                @click="addonActive = addon" :title="addon" style="color: rgb(1, 125, 232);">
            </span>
        </div>
        <div class="a-input u-mr-t3 u-mr-b2f5 u-mr-t4@xl">
            <label class="a-input__label u-ws-nowrap u-bg-snow" for="2149">Text</label>
            <input id="2149" class="a-input__item" maxlength="100" placeholder="Text" type="text"
                v-model="editing.Addons.calender.text">
        </div>
        <div class="a-input u-mr-t0 u-mr-b2f5">
            <label class="a-input__label u-ws-nowrap u-bg-snow" for="2150">CTA</label>
            <input id="2150" class="a-input__item" maxlength="200" placeholder="CTA" type="text"
                v-model="editing.Addons.calender.CTA">
        </div>
        <div class="a-input u-mr-t0 u-mr-b2f5">
            <label class="a-input__label u-ws-nowrap u-bg-snow" for="2152">Link</label>
            <input id="2152" class="a-input__item" maxlength="255" placeholder="Link" type="text"
                v-model="editing.Addons.calender.link">
        </div>
        <div class="o-content-block__row u-mr-t2 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
            <label class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl">Size</label>
            <div class="o-content-block__media">
                <el-slider :min="24" :max="45" v-model="editing.Addons.calender.size" />
            </div>
        </div>
        <div class="o-content-block__row u-mr-t1 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
            <label class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl u-mr-t0@xl">Padding
                top</label>
            <div class="o-content-block__media">
                <el-slider :min="5" :max="30" v-model="editing.Addons.calender.top" />
            </div>

        </div>
        <div class="o-content-block__row e--social u-mr-t2 u-mr-b3 u-mr-t1@xl">
            <label class="o-content-block__label u-wd-12 u-mr-r1f5">Text color</label>

            <div class="o-content-block__media">
                <ColorPicker v-model="editing.Addons.calender.color"></ColorPicker>
                <!-- <div class="m-color-picker">
                    <div class=""><a href="#" class="m-color-picker__current-color"
                            style="background-color: rgb(31, 31, 31);"></a></div>
                </div> -->
            </div>
        </div>
        <div class="o-content-block__row e--social u-mr-t2 u-mr-b0 u-mr-t1@xl"><label
                class="o-content-block__label u-wd-12 u-mr-r1f5">CTA color</label>
            <div class="o-content-block__media">
                <ColorPicker v-model="editing.Addons.calender.CTAColor"></ColorPicker>

            </div>
        </div>
    </div>


</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'
import ColorPicker from '@/components/ColorPicker.vue'

const editing = useEditingStore()
const addonActive = ref(editing.Addons.calender.icon)
watch(addonActive, (newVal) => {
    editing.Addons.calender.icon = newVal
})

const addons = ref([
    'none',
    'calendly',
    'add',
    'added',
    'search-calendar',
    'time-calendar',
    'schedule-calendar',
    'list',
    'schedule',
    'play-video',
    'board',
    'speaker',
    'conference',
    'vip-ticket',
    'ticket',
    'match-ticket2',
    'hands',
    'award',
    'vebinar',
    'exhibition',
    'photo',
    'museum',
    'museum-place',
    'baceball',
    'basketball',
    'cinema',
    'football',
    'gps',
    'graduate',
    'heart-rytm',
    'open',
    'party',
    'play',
    'run',
    'sokker',
    'start',
])

</script>
<style scoped></style>
