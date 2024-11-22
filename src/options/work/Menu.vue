<template>
    <div>
        <div class="u-ta-center u-mr-b4@xl">
            <ul class="o-tabs-attach e--editor">
                <li class="o-tabs-attach__item" v-for="(item, index) in menus" @click="handleMenuClick(item)">
                    <a href="#" class="o-tabs-attach__link" :class="{ 'e--active': store.activeMenu === item }">
                        <i class="icon_service-general u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl">
                        </i> {{ item }}
                    </a>
                </li>
                <!-- <li class="o-tabs-attach__item"><a href="#" class="o-tabs-attach__link"><i
                            class="icon_service-images u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl"></i> Images</a>
                </li>
                <li class="o-tabs-attach__item"><a href="#" class="o-tabs-attach__link"><i
                            class="icon_service-social u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl"></i> Social</a>
                </li>
                <li class="o-tabs-attach__item"><a href="#" class="o-tabs-attach__link e--active"><i
                            class="icon_service-addons u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl"></i> Add-ons</a>
                </li>
                <li class="o-tabs-attach__item"><a href="#" class="o-tabs-attach__link"><i
                            class="icon_service-design u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl"></i> Design</a>
                </li>
                <li class="o-tabs-attach__item"><a href="#" class="o-tabs-attach__link">
                        <i class="icon_service-layouts u-fz-15 u-tr-0 u-mr-b0f5 u-mr-b0@xl u-mr-r1@xl"></i>
                        Templates</a>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script name="Draw" setup>
import { ref, reactive, onMounted, nextTick, inject, toRefs, toRaw } from "vue";
import { useStore } from '@/stores'

const store = useStore()

let menus = ['Templates', 'General', 'Images', 'Social', 'Add-ons', 'Design', 'Templates-Home']
const state = reactive({
    PenColor: "",
    PenSize: 2.5
});

const handleMenuClick = (value) => {
    store.handleMenuClick(value)
}

onMounted(() => {

});


</script>
<style></style>