<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M163.001 512c0-192.749 156.254-349.003 349.003-349.003s349.005 156.254 349.005 349.003c0 192.749-156.256 349.005-349.005 349.005s-349.003-156.256-349.003-349.005zM512.003 0.004c-282.767 0-511.995 229.228-511.995 511.996s229.229 511.997 511.995 511.997c282.768 0 511.997-229.229 511.997-511.997s-229.229-511.996-511.997-511.996z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'spotlight-2',
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
      default: '#000'
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