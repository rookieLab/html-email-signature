<template>
  <div>
    <Home v-if="view === 'home'"></Home>
    <Draw v-if="view === 'draw'"></Draw>
  </div>
</template>

<script name="App" setup>
import { provide, ref } from 'vue'
import Home from './Home'
import Draw from './Draw'

// 显示视图
const view = ref('draw')
function updateView(value) {
  view.value = value
}
provide('view', {
  view, updateView
})


// PDF数据
const pdfData = ref('')
function updatePDFData(value) {
  pdfData.value = value
}
provide('pdfData', { pdfData, updatePDFData })

</script>
<style scoped></style>
