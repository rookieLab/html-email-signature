<template>
    <div>
        <div class="u-maxwd-100 u-mr-haauto">
            <div class="ready masonry-wall" gap="20" style="display:flex;">
                <div class="masonry-column" style="width: 33%; padding-left: 10px; padding-right: 10px;">
                    <div class="masonry-item" v-for="t in thirdComponents(1)" :data-name="t.name"
                        style="padding-top: 10px; padding-bottom: 10px;">
                        <div class="o-sign-list__item e--examples u-bs-1 u-mr-t0 u-mr-ha0 u-pd-ha2 u-pd-ha2f5@md">
                            <div class="o-sign-list__item_inner">
                                <div class="o-sign-list__sign-wrap">
                                    <div class="template default-style e--sc-75 e--mb-5">
                                        <component :is="t"></component>
                                    </div>
                                </div>
                            </div>
                            <div class="o-sign-list__btn" @click="store.handleSelectTemplate(t.name)">
                                <button type="button" class="a-btn u-wd-full u-wd-auto@md">Use template
                                    {{ t.name }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="masonry-column" style="width: 33%; padding-left: 10px; padding-right: 10px;">
                    <div class="masonry-item" v-for="t in thirdComponents(2)" :data-name="t.name"
                        style="padding-top: 10px; padding-bottom: 10px;">
                        <div class="o-sign-list__item e--examples u-bs-1 u-mr-t0 u-mr-ha0 u-pd-ha2 u-pd-ha2f5@md">
                            <div class="o-sign-list__item_inner">
                                <div class="o-sign-list__sign-wrap">
                                    <div class="template default-style e--sc-75 e--mb-5">
                                        <component :is="t"></component>
                                    </div>
                                </div>
                            </div>
                            <div class="o-sign-list__btn" @click="store.handleSelectTemplate(t.name)">
                                <button type="button" class="a-btn u-wd-full u-wd-auto@md">Use template
                                    {{ t.name }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="masonry-column" style="width: 33%; padding-left: 10px; padding-right: 10px;">
                    <div class="masonry-item" v-for="t in thirdComponents(3)" :data-name="t.name"
                        style="padding-top: 10px; padding-bottom: 10px;">
                        <div class="o-sign-list__item e--examples u-bs-1 u-mr-t0 u-mr-ha0 u-pd-ha2 u-pd-ha2f5@md">
                            <div class="o-sign-list__item_inner">
                                <div class="o-sign-list__sign-wrap">
                                    <div class="template default-style e--sc-75 e--mb-5">
                                        <component :is="t"></component>
                                    </div>
                                </div>
                            </div>
                            <div class="o-sign-list__btn" @click="store.handleSelectTemplate(t.name)">
                                <button type="button" class="a-btn u-wd-full u-wd-auto@md">Use template
                                    {{ t.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script name="Home" setup>
import { UploadFilled, } from '@element-plus/icons-vue'
import { reactive, onMounted, ref, computed, inject } from 'vue';
import * as tempComponents from '@/components/templates'
import { useEditingStore, useStore } from '@/stores'


// const editing = useEditingStore()
const store = useStore()

const savedTemplates = store.getSavedTemplates()
const savedTemplatesNames = savedTemplates.map(t => t.name)



// 创建一个函数返回指定部分的数据
const componentArray = Object.values(tempComponents).sort((a, b) => {
    const aInSaved = savedTemplatesNames.includes(a.name)
    const bInSaved = savedTemplatesNames.includes(b.name)
    if (aInSaved && !bInSaved) return -1
    if (!aInSaved && bInSaved) return 1
    return 0
})
// console.log(componentArray)
const getThirdComponents = (part) => {
    const third = Math.ceil(componentArray.length / 3)
    switch (part) {
        case 1: // 第一部分
            return componentArray?.slice(0, third)
        case 2: // 第二部分
            return componentArray?.slice(third, third * 2)
        case 3: // 第三部分
            return componentArray?.slice(third * 2)
        default:
            return []
    }
}


// 或者创建一个更通用的计算属性
const thirdComponents = computed(() => (part) => getThirdComponents(part))

</script>
<style></style>