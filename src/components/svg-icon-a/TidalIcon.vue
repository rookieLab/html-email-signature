<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M170.923 215l-170.923 170.924 170.923 170.92 170.921-170.92-170.921-170.924zM341.332 385.665l170.668 170.667 170.665-170.667-170.665-170.665-170.668 170.665zM341.332 726.997l170.668 170.664 170.665-170.664-170.665-170.668-170.668 170.668zM682.668 385.665l170.664 170.667 170.668-170.667-170.668-170.665-170.664 170.665z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'tidal',
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