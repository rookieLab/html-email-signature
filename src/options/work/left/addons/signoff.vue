<template>
        <div class="u-pd-ha2 u-pd-ha2f5@xl u-pd-t1" id="sign" index="0" data-draggable="true">
                <div class="o-editor-accordion__item u-br-20 u-bs-1 u-mr-b0"><!---->
                        <div class="title o-editor-accordion__head u-br-t2">
                                <div class="o-editor-accordion__title-wrap e--addon u-pd-va1 u-pd-l2 u-pd-r1f5"><i
                                                class="o-editor-accordion__img icon_addon-sign-off"></i>
                                        <p class="o-editor-accordion__title e--cnt-none u-fz-13 u-lh-1f53">Sign off</p>
                                        <!---->
                                </div>
                        </div>
                        <div class="o-editor-accordion__description e--addon" style="">
                                <ul class="o-tabs-free u-mr-b3 u-bg-white-medium u-br-20 u-br-40@xl u-mr-b4@xl">
                                        <li class="o-tabs-free__item u-mr-ha0"><a
                                                        class="o-tabs-free__link u-pd-t0f5 u-pd-r2 u-pd-b0f5 u-pd-l2 u-text-12 u-mr-b0 u-fw-600 e--active"
                                                        href="#">Text</a></li>
                                        <li class="o-tabs-free__item u-mr-ha0"><a
                                                        class="o-tabs-free__link u-pd-t0f5 u-pd-r2 u-pd-b0f5 u-pd-l2 u-text-12 u-mr-b0 u-fw-600"
                                                        href="#">Handwritten</a></li>
                                </ul>
                                <div>
                                        <div class="l-dp-flex e--gap-none u-text-14">
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_0" type="radio"
                                                                class="a-radio" name="sign_off" value="0">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_0">Happy Holidays!</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_1" type="radio"
                                                                class="a-radio" name="sign_off" value="1">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_1">Best,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_2" type="radio"
                                                                class="a-radio" name="sign_off" value="2">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_2">Best regards,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_3" type="radio"
                                                                class="a-radio" name="sign_off" value="3">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_3">Kind regards,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_4" type="radio"
                                                                class="a-radio" name="sign_off" value="4">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_4">Sincerely,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_5" type="radio"
                                                                class="a-radio" name="sign_off" value="5">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_5">Thanks,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_6" type="radio"
                                                                class="a-radio" name="sign_off" value="6">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_6">Regards,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_7" type="radio"
                                                                class="a-radio" name="sign_off" value="7">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_7">Best wishes,</label>
                                                </div>
                                                <div class="l-dp-flex__item u-wd-50p u-mr-b2">
                                                        <input v-model="signOffRadio" id="sign_off_8" type="radio"
                                                                class="a-radio" name="sign_off" value="8">
                                                        <label class="a-radio__label u-pd-l2 u-mr-r0f1 u-pd-l2f5@xl u-cl-black-dark"
                                                                for="sign_off_8">Custom text</label>
                                                </div>
                                        </div>
                                        <div class="a-input u-mr-t0f5">
                                                <input id="1945" v-model="signOffText" class="a-input__item u-pd-r5"
                                                        maxlength="60" placeholder="Text" type="text">
                                                <span class="a-pro-icon e--input">
                                                        <div class="a-tooltip u-fw-300" position="top"
                                                                tooltip="PRO feature"><i class="icon_service-pro"></i>
                                                        </div>
                                                </span>
                                        </div>

                                        <div class="o-content-block__row u-mr-t3 u-mr-b2 u-mr-b0f5@xl u-mr-t5@xl">
                                                <label class="o-content-block__label u-wd-12 u-mr-r1f5">
                                                        Font family
                                                </label>
                                                <div class="o-content-block__media e--full">
                                                        <div class="m-select">
                                                                <div class="m-select__active e--round"
                                                                        @click="$event.currentTarget.nextElementSibling.classList.toggle('u-hide')">
                                                                        <span class="m-select__trim u-display-flex u-ws-nowrap u-of-hidden u-maxwd-16@xl"
                                                                                :style="`font-family: ${selectFont?.value};`">
                                                                                {{ selectFont.name }}
                                                                        </span>

                                                                </div>
                                                                <div class="m-select__list u-hide" id="m-select__list">
                                                                        <div class="u-fz-20 m-select__item"
                                                                                v-for="font in fontList"
                                                                                :key="font.name"
                                                                                @click="handleSelectFont($event, font)">
                                                                                <span class="m-select__trim u-display-flex u-ws-nowrap u-of-hidden u-maxwd-16@xl"
                                                                                        :style="`font-family: ${font.value};`">
                                                                                        {{ font.name }}</span>

                                                                        </div>

                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div
                                                class="o-content-block__row u-mr-b1 u-display-inline-block u-display-flex@sm u-mr-t2@sm u-mr-t1@xl">
                                                <label
                                                        class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b2 u-mr-b1@xl">
                                                        Font size</label>
                                                <div class="o-content-block__media">
                                                        <el-slider v-model="fontSize" :max="60" :min="10" />
                                                </div>
                                        </div>
                                        <div
                                                class="o-content-block__row e--social u-mr-t2 u-mr-b3 u-mr-b1@xl u-mr-t1@xl">
                                                <label class="o-content-block__label u-wd-12 u-mr-r1f5 e--flex">
                                                        Font color
                                                </label>
                                                <div class="o-content-block__media">
                                                        <el-color-picker v-model="fontColor" id="el-color-picker" />
                                                </div>
                                        </div>
                                </div><!---->
                        </div>
                        <div class="o-editor-accordion__icon-close">
                                <div class=""><i class="icon_service-site-close"></i></div>
                        </div>
                </div>
        </div>
</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'
const editing = useEditingStore()


const signOff = ref(0)
const signOffRadio = ref(0)
const signOffText = ref('')
const signOffList = [
        'Happy Holidays!', 'Best,', 'Best regards,', 'Kind regards,', 'Sincerely,', 'Thanks,', 'Regards,', 'Best wishes,', 'Custom text'
]
watch([signOffRadio, signOffText], ([newSignOffRadio, newSignOffText], [oldSignOffRadio, oldSignOffText]) => {
        console.log('newSignOffRadio:', newSignOffRadio, 'newSignOffText:', newSignOffText)
        console.log('oldSignOffRadio:', oldSignOffRadio, 'oldSignOffText:', oldSignOffText)
        if (newSignOffRadio === '8') {
                signOff.value = newSignOffText
        }
        else if (newSignOffText !== oldSignOffText) {
                signOff.value = newSignOffText
        }
        else if (newSignOffRadio !== oldSignOffRadio) {
                signOff.value = signOffList[newSignOffRadio]
        }
        handleSaveSignoff()
})


const selectFont = ref({ name: 'Arial', value: 'Arial, Helvetica, sans-serif' })
const fontList = [
        { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
        { name: 'Arial Black', value: "'Arial Black', Gadget, sans-serif" },
        { name: 'Comic Sans MS', value: "'Comic Sans MS', cursive, sans-serif" },
        { name: 'Courgette', value: 'Courgette' },
        { name: 'Courier New', value: "'Courier New', Courier, monospace" },
        { name: 'Georgia', value: 'Georgia, serif' },
        { name: 'Grand Hotel', value: "'Grand Hotel'" },
        { name: 'Great Vibes', value: "'Great Vibes'" },
        { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
        { name: 'Lucida Console', value: "'Lucida Console', Monaco, monospace" },
        { name: 'Lucida Sans Unicode', value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" },
        { name: 'Ma Shan Zheng', value: "'Ma Shan Zheng'" },
        { name: 'Merienda', value: 'Merienda' },
        { name: 'Nothing You Could Do', value: "'Nothing You Could Do'" },
        { name: 'Palatino Linotype', value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" },
        { name: 'Parisienne', value: 'Parisienne' },
        { name: 'Sacramento', value: 'Sacramento' },
        { name: 'Sedgwick Ave', value: "'Sedgwick Ave'" },
        { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
        { name: 'Times New Roman', value: "'Times New Roman', Times, serif" },
        { name: 'Trebuchet MS', value: "'Trebuchet MS', Helvetica, sans-serif" },
        { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
]
const handleSelectFont = (e, font) => {
        selectFont.value = font
        document.getElementById('m-select__list').classList.add('u-hide')
        handleSaveSignoff()
}



//  font size and font color
const fontSize = ref(24)
const fontColor = ref('#000000')
watch([fontSize, fontColor], () => {
        handleSaveSignoff()
})





// other 
const getBase64Image = (text, fontFamily, fontSize, fontColor) => {
        let size = fontSize ? fontSize : 24
        console.log('text:', text, fontFamily, size, fontColor)

        // canvas height根据字体大小调整，宽度为1000px
        const canvas = document.createElement('canvas')
        canvas.width = 1000
        const ctx = canvas.getContext('2d')
        ctx.font = `${size}px ${fontFamily}`
        // Calculate text metrics to get actual height
        const metrics = ctx.measureText(text)
        const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + 10
        // Set canvas height to actual text height plus some padding
        canvas.height = actualHeight + 10
        ctx.font = `${size}px ${fontFamily}` // Need to set font again after changing canvas size
        ctx.fillStyle = fontColor
        // Draw text at baseline
        ctx.fillText(text, 0, size)
        return canvas.toDataURL('image/png')
}

const handleSaveSignoff = () => {
        // get base64 image
        let text = signOff.value
        let fontFamily = selectFont.value.value
        let size = fontSize.value
        let color = fontColor.value
        // get base64 image by text
        console.log('fontSize:', size)
        const base64 = getBase64Image(text, fontFamily, size, color)
        editing.setSignoff(base64)
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
