<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M229.749 0.171l202.469 573.733v-0.299l16.027 45.183c89.001 251.829 136.826 386.822 137.082 387.121 0.171 0 13.64 0.852 29.923 1.705 49.275 2.131 110.399 7.673 156.69 13.214 10.657 1.279 19.864 1.705 20.46 1.279l-200.764-569.471-18.585-52.429-103.28-291.982c-19.608-55.413-36.232-102.641-37.084-104.431l-1.322-3.793-201.617 0.17zM592.402 0.512l-0.427 226.168-0.341 226.168-18.627-52.514v-0.085l-24.083 503.401c23.657 66.794 36.317 102.428 36.444 102.599 0.171 0.171 13.64 1.023 29.923 1.79 49.317 2.131 110.399 7.673 156.86 13.214 10.657 1.279 19.906 1.705 20.46 1.279s0.852-231.027 0.724-511.927l-0.341-510.179-200.593 0.085zM229.749 0.084v511.075c0 281.070 0.299 511.288 0.639 511.628s17.732-1.279 38.661-3.665c20.887-2.558 49.871-5.542 64.364-6.82 22.079-2.131 88.149-6.394 95.821-6.394 2.217 0 2.387-11.509 2.685-216.536l0.341-216.536 16.197 45.183 5.542 16.027 24.296-502.976-8.099-23.273-37.51-104.005-1.279-3.708h-201.659z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'netflix',
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
      default: '#e50914'
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