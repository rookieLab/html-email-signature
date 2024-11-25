<template>
    <div class="o-outer-block u-ps-rel">
        <div class="o-outer-block__wrap u-bs-2 u-of-auto-y design">
            <div class="o-content-block u-pd-b8 u-pd-b6@xl u-maxwd-full">
                <div
                    class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex u-br-t2">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">General styles</h2>
                </div>
                <div class="u-pd-t3 u-pd-b1 u-pd-ha2 u-pd-t4@xl u-pd-b3@xl u-pd-ha3@xl">
                    <div class="o-content-block__row u-mr-t0 u-mr-b3 u-mr-b0@xl"><label
                            class="o-content-block__label u-mr-t0 u-wd-15 u-mr-r2 u-mr-t1@sm">Font family</label>
                        <div class="o-content-block__media e--full">
                            <FontSelect @change="handleSelectFont" />
                        </div>
                    </div>
                    <div class="o-content-block__row u-mr-b1 u-display-inline-block u-display-flex@sm">
                        <label
                            class="o-content-block__label u-wd-15 u-mr-r2 u-mr-t0 u-mr-b2f5 u-mr-t1@sm u-mr-b2@sm u-mr-b1@xl">Font
                            size</label>

                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                            <el-slider :max="100" :min="3" v-model="editing.design.fontSize" />
                        </div>
                        <!-- <div
                            class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl slider-target slider-ltr slider-horizontal slider-txt-dir-ltr">
                            <div class="slider-base">
                                <div class="slider-connects">
                                    <div class="slider-connect" style="transform: translate(0%, 0px) scale(0.4, 1);">
                                    </div>
                                </div>
                                <div class="slider-origin" style="transform: translate(-60%, 0px); z-index: 4;">
                                    <div class="slider-handle slider-handle-lower" data-handle="0" tabindex="0"
                                        role="slider" aria-orientation="horizontal" aria-valuemin="60.0"
                                        aria-valuemax="110.0" aria-valuenow="80.0" aria-valuetext="80 %">
                                        <div class="slider-touch-area"></div>
                                        <div class=" slider-tooltip slider-tooltip-top">80 %</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="o-content-block__row e--social u-mr-t2 u-mr-b3 u-mr-t1@xl"><label
                            class="o-content-block__label u-wd-15 u-mr-r2">Template color <span
                                class="a-pro-icon u-mr-l1f5">
                                <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature"><i
                                        class="icon_service-pro"></i></div>
                            </span></label>
                        <div class="o-content-block__media">
                            <ColorPicker v-model="editing.design.templateColor"></ColorPicker>

                        </div>
                    </div>
                    <div class="o-content-block__row e--social u-mr-b3">
                        <label class="o-content-block__label u-wd-15 u-mr-r2 e--flex">Text color <span
                                class="a-pro-icon u-mr-l1">
                                <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature"><i
                                        class="icon_service-pro"></i></div>
                            </span>
                        </label>
                        <div class="o-content-block__media">
                            <ColorPicker v-model="editing.design.color"></ColorPicker>
                            <!-- <div class="m-color-picker">
                                <el-color-picker v-model="editing.design.TextColor" id="text-color-picker" />
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="o-content-block__row e--social u-mr-b3f5 u-mr-b2@sm">
                        <label class="o-content-block__label u-wd-15 u-mr-r2 e--flex">Custom field styles <span
                                class="a-pro-icon u-mr-l1">
                                <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature"><i
                                        class="icon_service-pro"></i></div>
                            </span></label>
                        <div class="u-display-flex u-mr-rauto u-mr-t2 u-wd-full u-wd-auto@sm u-mr-t0@sm">
                            <div class="">
                                <div class="m-color-picker">
                                    <div class="a-tooltip" position="top" tooltip="Field name"><a href="#"
                                            class="m-color-picker__current-color"
                                            style="background-color: rgb(0, 0, 1);"></a></div>
                                </div>
                            </div>
                            <div class="u-mr-l2">
                                <div class="m-color-picker">
                                    <div class="a-tooltip" position="top" tooltip="Field value"><a href="#"
                                            class="m-color-picker__current-color"
                                            style="background-color: rgb(0, 0, 1);"></a></div>
                                </div>
                            </div>
                            <div class="u-ps-rel u-wd-3f5 u-ht-3f5 u-br-50 u-mr-l2 u-tr-0f3 u-hv-bg-gray-light">
                                <input id="isBold" type="checkbox" class="a-checkbox" name="isBold"><label
                                    class="u-wd-full u-ht-full u-cr-pointer u-display-flex" for="isBold"><i
                                        class="icon_service-bold u-hv-none u-fz-15 u-mr-vaauto u-mr-haauto u-cl-black-light"></i></label>
                            </div>
                            <div class="u-ps-rel u-wd-3f5 u-ht-3f5 u-br-50 u-mr-l2 u-tr-0f3 u-hv-bg-gray-light">
                                <input id="isItalic" type="checkbox" class="a-checkbox" name="isItalic"><label
                                    class="u-wd-full u-ht-full u-cr-pointer u-display-flex" for="isItalic"><i
                                        class="icon_service-italic u-hv-none u-fz-15 u-mr-vaauto u-mr-haauto u-cl-black-light"></i></label>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Social icons</h2>
                </div>
                <div class="u-pd-t3 u-pd-ha2 u-pd-t3f5@xl u-pd-ha3@xl">
                    <div class="l-dp-flex e--gap-x3 u-pd-t1 u-pd-b1">
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1f5 u-mr-r1 u-mr-r0@xl u-mr-b0@md">
                            <input id="default_branding" class="a-radio" type="radio" v-model="editing.design.iconsType"
                                value="branded">
                            <label class="a-radio__label u-fz-11 u-fw-600 u-pd-l2f5 u-cl-snow" for="default_branding">
                                <span
                                    class="l-dp-flex e--gap-none e--va-center u-lh-1f53 u-pd-ha1 u-br-20 u-bg-black-dark u-border-black-dark">
                                    <span class="u-mr-va0f3">Branded</span>
                                    <!-- <i class="icon_service-mysig-logo u-fz-14 u-mr-l0f5"></i> -->
                                </span>
                            </label>
                        </div>
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1f5 u-mr-r1 u-mr-r0@xl u-mr-b0@md">
                            <input id="default_colored" class="a-radio" type="radio" v-model="editing.design.iconsType"
                                value="colored">
                            <label class="a-radio__label u-fz-11 u-fw-600 u-pd-l2f5 u-cl-snow" for="default_colored">
                                <span
                                    class="l-dp-flex e--gap-none e--va-center u-lh-1f53 u-pd-ha1 u-br-20 u-bg-hawkes-blue u-border-hawkes-blue u-cl-black-dark"><span
                                        class="u-mr-va0f3">Colored</span>

                                </span>
                            </label>
                        </div>
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1f5 u-mr-r1 u-mr-r0@xl u-mr-b0@md">
                            <input id="default_outline" class="a-radio" type="radio" v-model="editing.design.iconsType"
                                value="outline">
                            <label class="a-radio__label u-fz-11 u-fw-600 u-pd-l2f5 u-cl-snow" for="default_outline">
                                <span
                                    class="l-dp-flex e--gap-none e--va-center u-lh-1f53 u-pd-ha1 u-br-20 u-bg-hawkes-blue u-border-hawkes-blue u-cl-black-dark"><span
                                        class="u-mr-va0f3">Outline</span>

                                </span>
                            </label>
                        </div>
                    </div>
                    <div
                        class="o-content-block__row u-mr-t2 u-mr-b1f5 u-display-inline-block u-display-flex@sm u-mr-b1@xl u-mr-t1@xl">
                        <label
                            class="o-content-block__label e--flex u-wd-15 u-mr-r2 u-mr-b3 u-mr-b2@sm u-mr-b1@xl">Size</label>

                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                            <el-slider :max="40" :min="20" v-model="editing.design.iconsSize" />
                        </div>

                    </div>
                    <div class="o-content-block__row u-mr-b3"
                        :class="{ 'u-pe-none': isOutline, 'u-op-0f5': isOutline }">
                        <div class="l-dp-flex e--gap-none e--va-center">
                            <label class="o-content-block__label u-wd-15 u-mr-r2 e--flex">
                                Shape
                                <span class="a-pro-icon u-mr-l1f5">
                                    <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature">
                                        <i class="icon_service-pro"></i>
                                    </div>
                                </span>
                            </label>
                            <span class="m-shapes l-dp-flex e--va-center e--gap-none u-wd-60p">
                                <div class="m-shapes__icon u-mr-r2 shape-square" :class="{ active: shape === 'square' }"
                                    @click="shape = 'square'"></div>
                                <div class="m-shapes__icon u-mr-r2 shape-rounded"
                                    :class="{ active: shape === 'rounded' }" @click="shape = 'rounded'"></div>
                                <div class="m-shapes__icon u-mr-r2 shape-circle" :class="{ active: shape === 'circle' }"
                                    @click="shape = 'circle'"></div>
                            </span>
                        </div>
                    </div>
                    <div class="o-content-block__row u-mr-b3"
                        :class="{ 'u-pe-none': isBranded, 'u-op-0f5': isBranded }">
                        <div class="u-display-flex">
                            <label class="o-content-block__label u-wd-15 u-mr-r2">
                                Icon color
                            </label>
                            <ColorPicker v-model="editing.design.iconsColor"></ColorPicker>
                        </div>
                    </div>
                    <div class="o-content-block__row u-mr-b0"
                        :class="{ 'u-pe-none': isBranded || isOutline, 'u-op-0f5': isBranded || isOutline }">
                        <div class="u-display-flex">
                            <label class="o-content-block__label u-wd-15 u-mr-r2">Icon background</label>
                            <ColorPicker v-model="editing.design.iconsBackground"></ColorPicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script name="Design" setup>
import { provide, ref, reactive, computed, watch } from 'vue'
import { useEditingStore, useTemplatesStore } from '@/stores'
import FontSelect from '@/components/FontSelect.vue'
import ColorPicker from '@/components/ColorPicker.vue'

const editing = useEditingStore()
const shape = ref('square')

watch(shape, (newShape) => {
    console.log(newShape, "xx")
    editing.design.iconsShape = newShape
})

const isBranded = computed(() => editing.design.iconsType === 'branded')
const isOutline = computed(() => editing.design.iconsType === 'outline')

const selectFont = ref({ name: 'Arial', value: 'Arial, Helvetica, sans-serif' })
const handleSelectFont = (font) => {
    selectFont.value = font
    editing.design.font = font.name

}

</script>
<style scoped>
.m-shapes__icon {
    width: 20px;
    height: 20px;
    border: solid #7485a3 1px;
}

.m-shapes__icon.active {
    background-color: #000;
    border-color: black;
}

.shape-square {
    border-radius: 0;
}

.shape-rounded {
    border-radius: 25%;
}

.shape-circle {
    border-radius: 50%;
}


:deep(.m-color-picker .el-color-picker__trigger) {
    border-radius: 100px;
    /* background-color: rgb(0, 0, 0); */
    border: solid 1px #000;
}

:deep(.m-color-picker .el-color-picker__trigger .el-color-picker__color) {
    display: none;
}
</style>