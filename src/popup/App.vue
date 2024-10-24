<template>
  <div>
    <Home v-if="store.view === 'home'"></Home>
    <Draw v-if="store.view === 'draw'"></Draw>
    <Type v-if="store.view === 'type'"></Type>
  </div>
</template>

<script name="App" setup>
import Home from './Home'
import Draw from './Draw'
import Type from './Type'

import { useStore } from '@/stores'

const store = useStore()

</script>
<style scoped></style>
