<template>
    <div>
        <Menu></Menu>
        <div class="l-editor u-display-inline-block u-pd-ha0 u-pd-ha1@xl u-display-flex@xl">
            <Preview v-if="store.activeMenu !== 'Templates' && store.activeMenu !== 'Templates-Home'"></Preview>
            <Sidebar v-if="store.activeMenu !== 'Templates' && store.activeMenu !== 'Templates-Home'"></Sidebar>
            <Home v-if="store.activeMenu === 'Templates'"></Home>
            <HomeBack v-if="store.activeMenu === 'Templates-Home'"></HomeBack>
        </div>

    </div>
</template>

<script name="App" setup>
import { provide, ref, reactive } from 'vue'

import Sidebar from "./left/index.vue"
import Preview from "./preview/index.vue"
import Menu from './Menu'
import Home from '../Home'
import HomeBack from "../HomeBack"

import { useStore } from '@/stores'
const store = useStore()


</script>
<style scoped></style>