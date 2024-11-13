<template>
  <div>
    <!-- <Home></Home> -->
    <Work></Work>
  </div>
</template>

<script name="App" setup>
import { provide, ref, reactive } from 'vue'

import Work from './work/index.vue'

// // 显示视图
// const view = ref('home')
// function updateView(value) {
//   view.value = value
// }
// provide('view', {
//   view, updateView
// })


// // PDF数据
// const apPdf = reactive({
//   data: "",
//   name: "",
// });
// function updatePDF(name, data) {
//   console.log('updatePDF', name, data)
//   data ? apPdf.data = data : null
//   data ? apPdf.name = name : null
// }
// provide('pdfData', { apPdf, updatePDF })

</script>
<style scoped></style>
