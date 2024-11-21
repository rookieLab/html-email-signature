<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M468.635 1024h-235.154l-0.009-520.128-137.472 0.001v-187.623l137.472-0.026 0.009-64.188c0-136.55 110.172-247.768 247.628-251.916l7.96-0.12h203.889v194.12h-148.395c-41.984 0-75.928 33.583-75.928 74.873v0l-0.027 47.231 459.363 0.026 0.029 707.75h-235.154l-0.014-520.128h-224.224l0.027 520.128z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'fiverr',
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
      default: '#1dbf73'
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