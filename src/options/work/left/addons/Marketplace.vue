<template>

        <div class="o-editor-accordion__description e--addon" style="">
                <div class="l-dp-flex e--gap-x3 u-mr-b2f5">
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1 u-mr-r1 u-mr-r0@md">
                                <!-- value="black" -->
                                <input id="black" class="a-radio" type="radio" v-model="type" value="black">
                                <label class="a-radio__label" for="black">
                                        <span
                                                class="u-fz-11 u-fw-600 u-pd-ha1 u-pd-va0f5 u-cl-snow u-bg-black u-border-black u-br-20">Black</span>
                                </label>
                        </div>
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1 u-mr-r1 u-mr-r0@md">
                                <!-- value="white" -->
                                <input id="white" class="a-radio" type="radio" v-model="type" value="white">
                                <label class="a-radio__label" for="white">
                                        <span
                                                class="u-fz-11 u-fw-600 u-pd-ha1 u-pd-va0f5 u-cl-black u-border-gray u-br-20">White</span>
                                </label>
                        </div>
                        <div class="l-dp-flex__item u-wd-auto u-mr-b1">
                                <!-- value="gray" -->
                                <input id="gray" class="a-radio" type="radio" v-model="type" value="gray">
                                <label class="a-radio__label" for="gray"><span
                                                class="u-fz-11 u-fw-600 u-pd-ha1 u-pd-va0f5 u-cl-black u-bg-gray-medium u-border-gray-medium u-br-20">Gray</span></label>
                        </div>
                </div>
                <div>
                        <div v-for="provider in editing.Addons.marketplace.providers"
                                class="o-content-block__row e--social u-mr-b3 draggable-badge" data-draggable="true">
                                <label class="m-social-addon">
                                        <img :alt="provider.name" :src="provider.img"
                                                class="m-social-addon__img"></label>
                                <div class="a-input o-content-block__media u-mr-t0 u-mr-l0f5@xl">
                                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                for="1504">Link</label>
                                        <input id="1504" class="a-input__item u-pd-r3" maxlength="255"
                                                placeholder="Link" type="text" v-model="provider.link">
                                </div>
                        </div>
                </div>
                <div class="o-content-block__row u-mr-b1 u-mr-t4">
                        <div class="u-display-flex">
                                <label class="o-content-block__label u-wd-12 u-mr-r1f5 e--flex">Shape</label>
                                <span class="m-shapes l-dp-flex e--va-center e--gap-none u-wd-60p u-pd-t0f5">
                                        <ShapeSelect v-model="shape" />
                                </span>
                        </div>
                </div>
                <div class="o-content-block__row u-mr-t2 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
                        <label
                                class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl">Size</label>

                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                                <el-slider :max="65" :min="15" v-model="editing.Addons.marketplace.size" />
                        </div>
                </div>
                <div class="o-content-block__row u-mr-t1 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
                        <label
                                class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl u-mr-t0@xl">Padding
                                top</label>
                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                                <el-slider :max="30" :min="5" v-model="editing.Addons.marketplace.paddingTop" />
                        </div>

                </div>
        </div>
</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'
import ShapeSelect from '@/components/ShapeSelect.vue'

const editing = useEditingStore()


const type = ref('black')
watch(type, (newVal) => {
        console.log('shape changed:', newVal)
        editing.Addons.marketplace.type = newVal
        editing.Addons.marketplace.providers.forEach(provider => {
                provider.img = `/assets/addons/${provider.name}_shape1_${newVal}.png`
        })

})


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
