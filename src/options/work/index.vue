<template>
    <div>
        <Menu></Menu>
        <div class="l-editor u-display-inline-block u-pd-ha0 u-pd-ha1@xl u-display-flex@xl">
            <Preview v-if="store.activeMenu !== 'Templates' && store.activeMenu !== 'Templates-Home'"></Preview>
            <Sidebar v-if="store.activeMenu !== 'Templates' && store.activeMenu !== 'Templates-Home'"></Sidebar>
            <Templates v-if="store.activeMenu === 'Templates'"></Templates>
            <HomeBack v-if="store.activeMenu === 'Templates-Home'"></HomeBack>
        </div>

    </div>
</template>

<script name="App" setup>
import { provide, ref, reactive } from 'vue'

import Sidebar from "./left/index.vue"
import Preview from "./preview/index.vue"
import Menu from './Menu'
import Templates from '../Templates'
import HomeBack from "../HomeBack"

import { useStore } from '@/stores'
const store = useStore()


</script>
<style scoped></style>