<template>
    <div
        class="l-editor__mobile u-wd-full u-ps-abs u-bs-2 u-bs-none@xl u-ps-rel@xl u-mr-t0@xl u-pd-b0@xl u-maxwd-50@xl u-mr-r4@xl u-mr-r5@xxl u-ps-t0">
        <General v-if="activeMenu === 'General'"></General>
        <Images v-if="activeMenu === 'Images'"></Images>
        <Social v-if="activeMenu === 'Social'"></Social>
        <Addons v-if="activeMenu === 'Add-ons'"></Addons>
        <Design v-if="activeMenu === 'Design'"></Design>
        <Templates v-if="activeMenu === 'Templates'"></Templates>
    </div>
</template>

<script name="Sidebar" setup>
import { provide, ref, reactive, computed } from 'vue'

import General from './General'
import Images from './Images'
import Social from './Social'
import Addons from './addons/index'
import Design from './Design'
import Templates from './Templates'


import { useStore } from '@/stores'

const store = useStore()
const activeMenu = computed(() => store.activeMenu)



</script>
<style scoped></style>