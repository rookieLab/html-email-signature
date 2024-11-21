<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewbox="0 0 896 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path d="M895.936 230.656h-895.936v121.024h895.936v-121.024z" :fill="color"></path>
      <path d="M0 461.312v562.688l447.968-251.296 448.032 251.296v-562.688h-895.968z" :fill="color">
      </path>
      <path d="M895.936 0h-895.936v120.992h895.936v-120.992z" :fill="color">
      </path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'substack',
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
      default: '#ff6719'
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