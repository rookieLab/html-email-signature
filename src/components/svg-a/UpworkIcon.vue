<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M791.163 624.829c-46.973 0-91.004-19.906-131.029-52.301l9.719-45.864 0.341-1.79c8.823-48.72 36.189-130.433 121.013-130.433 63.597 0 115.215 51.662 115.215 115.215-0.043 63.469-51.662 115.173-115.258 115.173v0zM791.163 277.861c-108.225 0-192.239 70.288-226.339 186.101-52.002-78.175-91.559-172.035-114.533-251.147h-116.622v303.149c-0.085 59.93-48.636 108.523-108.566 108.609-59.889-0.085-108.395-48.72-108.481-108.609v-303.149h-116.622v303.149c0 124.21 101.021 226.040 225.103 226.040 124.167 0 225.188-101.832 225.188-226.040v-50.723c22.549 47.186 50.383 95.011 84.142 137.295l-71.311 335.587h119.223l51.705-243.389c45.311 28.943 97.398 47.271 157.116 47.271 127.875 0 231.838-104.517 231.838-232.306 0-127.875-103.962-231.838-231.838-231.838h-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'upwork',
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
      default: '#6edb44'
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