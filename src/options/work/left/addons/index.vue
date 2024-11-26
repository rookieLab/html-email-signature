<template>

    <div class="o-outer-block u-ps-rel">
        <div class="o-outer-block__wrap u-bs-2 u-of-auto-y addons">
            <div class="o-content-block u-maxwd-full u-pd-b6 u-pd-b4@xl">
                <div>
                    <div
                        class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex u-br-t2">
                        <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Included add-ons</h2>
                    </div>
                    <div class="o-editor-accordion u-pd-t3 u-mr-b0  u-pd-t4@xl u-pd-b4 u-pd-b5@xl">
                        <div class="" id="sign" index="0" data-draggable="true">
                            <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="sign" index="0" data-draggable="true">
                                <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                    <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'sign'">
                                        <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                            <i class="o-editor-accordion__img icon_addon-sign-off"></i>
                                            <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">Sign off
                                            </p>
                                            <el-switch v-model="editing.Addons.signOff.enable" />
                                        </div>
                                    </div>
                                    <SignOff v-if="state.show === 'sign'"></SignOff>
                                </div>
                            </div>
                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="disclaimer" index="1" data-draggable="true">
                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'disclaimer'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                        <i class="o-editor-accordion__img icon_addon-disclaimer"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">
                                            Disclaimer
                                        </p>
                                        <el-switch v-model="editing.Addons.Disclaimer.enable" />
                                    </div>
                                </div>
                                <Disclaimer v-if="state.show === 'disclaimer'"></Disclaimer>
                            </div>
                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="green-message" index="2" data-draggable="true">
                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                <div class="title o-editor-accordion__head u-br-t2"
                                    @click="state.show = 'green-message'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                        <i class="o-editor-accordion__img icon_addon-green-message"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">Green message
                                        </p>
                                        <el-switch v-model="editing.Addons.green.enable" />
                                    </div>
                                </div>
                                <GreenMessage v-if="state.show === 'green-message'"></GreenMessage>
                            </div>
                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1 draggable" id="videos" index="2"
                            data-draggable="true" draggable="false">
                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                <!-- <div class="sort"><i class="o-editor-accordion__icon-drag icon_service-drag"></i></div> -->
                                <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'videos'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5"><i
                                            class="o-editor-accordion__img icon_addon-video"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">
                                            Video conference
                                        </p>
                                        <el-switch v-model="editing.Addons.video.enable" />
                                    </div>
                                </div>
                                <VideoConference v-if="state.show === 'videos'"></VideoConference>
                            </div>
                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="marketplace" index="3" data-draggable="true">

                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">

                                <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'marketplace'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                        <i class="o-editor-accordion__img icon_addon-marketplace"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">
                                            Marketplace &amp; Retail </p>
                                        <el-switch v-model="editing.Addons.marketplace.enable" />
                                    </div>
                                </div>
                                <Marketplace v-if="state.show === 'marketplace'"></Marketplace>
                            </div>
                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="social" index="4" data-draggable="true">
                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'social'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                        <i class="o-editor-accordion__img icon_addon-social"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">Social</p>
                                        <el-switch v-model="editing.Addons.social.enable" />
                                    </div>
                                </div>
                                <Social v-if="state.show === 'social'"></Social>
                            </div>

                        </div>
                        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1 draggable" id="calendar" index="3"
                            data-draggable="true">
                            <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0">
                                <div class="sort"></div>
                                <div class="title o-editor-accordion__head u-br-t2" @click="state.show = 'calendar'">
                                    <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5">
                                        <i class="o-editor-accordion__img icon_addon-event"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">
                                            Event &amp; Calendar
                                        </p>
                                        <el-switch v-model="editing.Addons.calender.enable" />
                                    </div>
                                </div>
                                <Calendar v-if="state.show === 'calendar'"></Calendar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script name="Addons" setup>
import { provide, ref, reactive, watch } from 'vue'

import SignOff from "./signoff.vue"
import Disclaimer from "./Disclaimer.vue"
import GreenMessage from "./GreenMessage.vue"
import Marketplace from "./Marketplace.vue"
import Social from "./Social.vue"
import Calendar from "./Calendar.vue"
import VideoConference from "./VideoConference.vue"
import { useEditingStore } from '@/stores'

const editing = useEditingStore()
const state = reactive({
    show: "sign"
})

watch([state.show], () => {
    window.location.hash = state.show
})
</script>
<style scoped></style>