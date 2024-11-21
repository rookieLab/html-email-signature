<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M1024 640v384h-1024v-384h128v256h768v-256h128zM192 704h640v128h-640v-128zM224 569.426l27.166-121.426 612.834 134.574-27.166 121.426-612.834-134.574zM288 307.265l54.593-115.265 585.407 268.735-54.593 115.265-585.407-268.735zM992 349.745l-76.636 98.255-499.364-376.965 55.406-71.035h57.283l463.311 349.745z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'stack-overflow',
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
      default: '#f48024'
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