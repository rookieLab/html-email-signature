<template>
        <div class="" style="">
                <div class="o-editor-accordion__description e--addon">
                        <div class="l-dp-flex e--gap-x025">
                                <span class="l-dp-flex__item u-wd-auto" @click="meetType = 'zoom'">
                                        <div class="u-br-20 u-border-snow"
                                                :class="{ 'u-border-snow': meetType !== 'zoom' }">
                                                <span class="m-video-item"
                                                        :class="{ 'e--active': meetType === 'zoom' }">
                                                        <div class="m-video-item__btn">
                                                                <i title="Zoom" class="u-fz-20 icon_addon-zoom"></i>
                                                                <span class="u-mr-l0f5">Zoom</span>
                                                        </div>
                                                </span>
                                        </div>
                                </span>
                                <span class="l-dp-flex__item u-wd-auto" @click="meetType = 'google-meet'">
                                        <div class="u-br-20" :class="{ 'u-border-snow': meetType !== 'google-meet' }">
                                                <span class="m-video-item"
                                                        :class="{ 'e--active': meetType === 'google-meet' }">
                                                        <div class="m-video-item__btn">
                                                                <i title="Google Meet"
                                                                        class="u-fz-20 icon_addon-meet"></i>
                                                                <span class="u-mr-l0f5">Google Meet</span>
                                                        </div>
                                                </span>
                                        </div>
                                </span>
                                <span class="l-dp-flex__item u-wd-auto" @click="meetType = 'skype'">
                                        <div class="u-br-20" :class="{ 'u-border-snow': meetType !== 'skype' }">
                                                <span class="m-video-item"
                                                        :class="{ 'e--active': meetType === 'skype' }">
                                                        <div class="m-video-item__btn">
                                                                <i title="Skype" class="u-fz-20 icon_addon-skype"></i>
                                                                <span class="u-mr-l0f5">Skype</span>
                                                        </div>
                                                </span>
                                        </div>
                                </span>
                                <span class="l-dp-flex__item u-wd-auto" @click="meetType = 'microsoft-teams'">
                                        <div class="u-br-20 u-border-snow"
                                                :class="{ 'u-border-snow': meetType !== 'microsoft-teams' }">
                                                <span class="m-video-item"
                                                        :class="{ 'e--active': meetType === 'microsoft-teams' }">
                                                        <div class="m-video-item__btn">
                                                                <i title="Microsoft teams"
                                                                        class="u-fz-20 icon_addon-microsoft-teams"></i>
                                                                <span class="u-mr-l0f5">Microsoft teams</span>
                                                        </div>
                                                </span>
                                        </div>
                                </span>
                        </div>
                        <div class="a-input u-mr-t4 u-mr-b3f5">
                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="709">Button
                                        text</label>
                                <input id="709" class="a-input__item u-pd-r3" maxlength="100" placeholder="Button text"
                                        type="text" v-model="editing.Addons.video.text">
                                <!-- <i class="a-input__icon icon_service-site-close"></i> -->
                        </div>
                        <div class="a-input u-mr-t0 u-mr-b3f5">
                                <label class="a-input__label u-ws-nowrap u-bg-snow" for="711">Link</label>
                                <input id="711" class="a-input__item" maxlength="255" placeholder="Link" type="text"
                                        v-model="editing.Addons.video.link">
                        </div>
                        <div class="m-select u-mr-b3f5 u-mr-b4@xl">
                                <div class="m-select__label u-bg-snow e--visible e--fill u-pd-ha0f5 u-mr-l1f5">
                                        Font family
                                </div>
                                <div class="o-content-block__media e--full  e--round">
                                        <FontSelect @change="handleSelectFont" />
                                </div>

                        </div>
                        <div class="o-content-block__row e--social u-mr-t2 u-mr-b3">
                                <label class="o-content-block__label u-wd-12 u-mr-r1f5">Background</label>
                                <div class="o-content-block__media">
                                        <ColorPicker v-model="editing.Addons.video.bgcolor"></ColorPicker>
                                </div>
                                <!-- <div class="u-pe-none u-op-0f5 o-content-block__media">
                                        <div class="m-color-picker">
                                                <div class="">
                                                        <a class="m-color-picker__current-color"
                                                                style="background-color: rgb(0, 160, 144);"></a>
                                                </div>
                                        </div> -->
                                <!-- </div> -->
                        </div>
                        <div class="o-content-block__row e--social u-mr-t2 u-mr-b4 u-mr-b3@xl">
                                <label class="o-content-block__label u-wd-12 u-mr-r1f5">Text color</label>
                                <div class="o-content-block__media">
                                        <ColorPicker v-model="editing.Addons.video.color"></ColorPicker>
                                </div>
                                <!-- <div class="u-pe-none u-op-0f5 o-content-block__media">
                                        <div class="m-color-picker">
                                                <div class="">
                                                        <a class="m-color-picker__current-color"
                                                                style="background-color: rgb(255, 255, 255);"></a>
                                                </div>
                                        </div>
                                </div> -->
                        </div>
                        <div class="o-content-block__row u-mr-b1 u-mr-t3">
                                <div class="u-display-flex">
                                        <label class="o-content-block__label u-wd-12 u-mr-r1f5 e--flex">Shape</label>
                                        <span class="m-shapes l-dp-flex e--va-center e--gap-none u-wd-60p u-pd-t0f5">
                                                <ShapeSelect v-model="editing.Addons.video.shape" />
                                        </span>
                                </div>
                        </div>
                        <div
                                class="o-content-block__row u-mr-b1 u-mr-t2 u-display-inline-block u-display-flex@sm u-mr-t1@xl u-mr-b0@xl">
                                <label
                                        class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl">Size</label>

                                <div class="o-content-block__media">
                                        <el-slider v-model="editing.Addons.video.size" :max="30" :min="5" />
                                </div>
                                <!-- <div
                                        class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl slider-target slider-ltr slider-horizontal slider-txt-dir-ltr">
                                        <div class="slider-base">
                                                <div class="slider-connects">
                                                        <div class="slider-connect"
                                                                style="transform: translate(0%, 0px) scale(0.47619, 1);">
                                                        </div>
                                                </div>
                                                <div class="slider-origin"
                                                        style="transform: translate(-52.381%, 0px); z-index: 4;">
                                                        <div class="slider-handle slider-handle-lower" data-handle="0"
                                                                tabindex="0" role="slider" aria-orientation="horizontal"
                                                                aria-valuemin="24.0" aria-valuemax="45.0"
                                                                aria-valuenow="34.0" aria-valuetext="34 px">
                                                                <div class="slider-touch-area"></div>
                                                                <div class=" slider-tooltip slider-tooltip-top">34 px
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div> -->
                        </div>
                        <div class="o-content-block__row u-mr-t0 u-mr-b0 u-display-inline-block u-display-flex@sm">
                                <label
                                        class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl u-mr-t0@xl">Padding
                                        top</label>

                                <div class="o-content-block__media">
                                        <el-slider v-model="editing.Addons.video.top" :max="30" :min="5" />
                                </div>
                                <!-- <div
                                        class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-t2@xl u-mr-b3@xl slider-target slider-ltr slider-horizontal slider-txt-dir-ltr">
                                        <div class="slider-base">
                                                <div class="slider-connects">
                                                        <div class="slider-connect"
                                                                style="transform: translate(0%, 0px) scale(0, 1);">
                                                        </div>
                                                </div>
                                                <div class="slider-origin"
                                                        style="transform: translate(-100%, 0px); z-index: 4;">
                                                        <div class="slider-handle slider-handle-lower" data-handle="0"
                                                                tabindex="0" role="slider" aria-orientation="horizontal"
                                                                aria-valuemin="5.0" aria-valuemax="30.0"
                                                                aria-valuenow="5.0" aria-valuetext="5 px">
                                                                <div class="slider-touch-area"></div>
                                                                <div class=" slider-tooltip slider-tooltip-top">5 px
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div> -->
                        </div>
                </div>
                <div style="display: none;">
                        <i id="drawVideosContainerIcon" class="icon_addon-meet"></i>
                        <div id="drawVideosContainer">
                                <div class="konvajs-content" role="presentation"
                                        style="position: relative; user-select: none; width: 0px; height: 34px;">
                                        <canvas width="0" height="42"
                                                style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 0px; height: 34px; display: block;"></canvas>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'
import FontSelect from '@/components/FontSelect.vue'
import ShapeSelect from '@/components/ShapeSelect.vue'
import ColorPicker from '@/components/ColorPicker.vue'


const editing = useEditingStore()


const meetType = ref(editing.Addons.video.type)
const meetMap = {
        "zoom": "Meet me on Zoom",
        "google-meet": "Meet me on Google Meet",
        "microsoft-teams": "Meet me on Microsoft teams",
        "skype": "Meet me on Skype"
}
watch([meetType], () => {
        // console.log(meetType.value)
        editing.Addons.video.type = meetType.value
        editing.Addons.video.text = meetMap[meetType.value]   
})



//  font size and font color
const selectFont = ref({ name: 'Arial', value: 'Arial, Helvetica, sans-serif' })
const handleSelectFont = (font) => {
        console.log('font', font)
        selectFont.value = font
        editing.Addons.video.font = font.name
}



</script>
<style scoped>
.slider-demo-block {
        max-width: 600px;
        display: flex;
        align-items: center;
}

.slider-demo-block .el-slider {
        margin-top: 0;
        margin-left: 12px;
}

.slider-demo-block .demonstration {
        font-size: 14px;
        color: var(--el-text-color-secondary);
        line-height: 44px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0;
}

.slider-demo-block .demonstration+.el-slider {
        flex: 0 0 70%;
}


:deep(#el-color-picker .el-color-picker__trigger) {
        border-radius: 100px;
        background-color: rgb(0, 0, 0);
}

:deep(#el-color-picker .el-color-picker__trigger .el-color-picker__color) {

        display: none;
}

/* :deep(#el-color-picker .el-color-picker__trigger .el-color-picker__color .el-color-picker__color-inner) {
        display: none;
} */
</style>
