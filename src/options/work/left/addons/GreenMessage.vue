<template>

        <div class="o-editor-accordion__description e--addon" style="">

                <div class="m-addon-icons u-mr-b2">
                        <a class="m-addon-icons__item e--active" href="#">
                                <img alt="none" src="/assets/addons/none.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="green-earth" src="/assets/addons/green-earth.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="recycling" src="/assets/addons/recycling.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="tree" src="/assets/addons/tree.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="leaf" src="/assets/addons/leaf.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="leaves" src="/assets/addons/leaves.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="hand-leaves" src="/assets/addons/hand-leaves.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="hand-earth" src="/assets/addons/hand-earth.png"></a>
                        <a class="m-addon-icons__item" href="#">
                                <img alt="letter" src="/assets/addons/letter.png"></a>
                </div>
                <div class="o-content-block__row u-mr-b3 u-mr-t0"><label
                                class="o-content-block__label u-wd-12 u-mr-r1f5">Type</label>
                        <div class="o-content-block__media e--full">
                                <div class="m-select">
                                        <el-select v-model="message" placeholder="Select" size="large"
                                                style="width: 240px">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                        :value="item.value" />
                                        </el-select>

                                </div>
                        </div>
                </div>
                <textarea class="o-content-block__textarea" maxlength="150" rows="3"
                        v-model="messageMap[message]"></textarea>
                <div class="o-content-block__row u-mr-t4">
                        <label class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b1@sm">
                                Font size
                        </label>
                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                                <el-slider :max="3" :min="1" v-model="editing.Addons.green.fontSize" />
                        </div>
                </div>
        </div>
        <div class="o-editor-accordion__icon-close">
                <div class=""><i class="icon_service-site-close"></i></div>
        </div>

</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'

const editing = useEditingStore()
const options = [
        {
                value: 'Green message 1',
                label: 'Green message 1',
        },
        {
                value: 'Green message 2',
                label: 'Green message 2',
        },
        {
                value: 'Green message 3',
                label: 'Green message 3',
        }
]

const message = ref("Green message 1")
const messageMap = {
        "Green message 1": "Please consider the environment before printing this email",
        "Green message 2": "Please don’t print this email",
        "Green message 3": "Save paper. Don’t print",
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
