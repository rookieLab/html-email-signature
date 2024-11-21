<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">

   
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 10%;width: 80%;height: 80%;">
        <path
          d="M840.143 315.075c7.959 81.846-26.324 131.077-80.197 158.77 89.38 21.539 145.701 75.077 134.681 195.078-14.081 149.539-124.274 189.539-282.22 198.154v156.923h-94.277v-154.462c-23.876 0-48.975 0-74.687-0.615v155.077h-94.277v-156.923c-22.038 0-44.078-0.615-66.729-0.615h-122.438l18.978-112.615c69.177 1.231 67.953 0 67.953 0 26.324 0 33.671-19.077 35.507-31.385v-247.385h9.795c-3.674-0.615-7.346-0.615-9.795-0.615v-176.616c-3.674-19.693-15.917-41.846-54.485-41.846 0 0 1.225-1.231-67.953 0v-100.923l129.784 0.615c18.978 0 39.18 0 59.383-0.615v-155.077h94.277v152c25.1-0.615 50.199-1.231 74.687-1.231v-150.77h94.277v155.077c121.214 10.461 217.327 48 227.734 160l0.001-0.002zM708.523 650.461c0-121.847-199.574-104-263.241-104v208.001c63.668 0 263.241 13.538 263.241-104v-0.001zM665.058 357.537c0-111.385-166.516-94.769-219.776-94.769v188.924c53.26 0 219.776 12.308 219.776-94.155v0z"
          :fill="color"></path>
      </svg>
    

  </a>
</template>

<script>
export default {
  name: 'bitcoin',
  props: {
    url: {
      type: String,
      required: true
    },
    shape: {
      type: String,
      default: 'rounded'
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    background: {
      type: String,
      default: '#f7931e'
    }
  },
  data() {
    return {
      shapeMap: {
        'circle': '50%',
        'rounded': '15%',
        'square': '0%'
      }
    }
  }
};
</script>

<style scoped></style>