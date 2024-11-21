<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM393.051 661.98c-57.125 0-103.434 46.309-103.434 103.434s46.309 103.434 103.434 103.434c57.125 0 103.434-46.309 103.434-103.434s-46.309-103.434-103.434-103.434zM706.457 205.834l-44.994 92.057 7.192 4.674c66.333 44.791 110.206 122.051 110.206 209.435 0 87.919-44.477 164.978-111.709 209.972v0l-2.069 1.552 44.994 92.057c100.331-61.543 167.046-174.804 167.046-303.58 0-130.844-68.267-244.622-170.667-306.166v0zM248.242 408.566c-57.125 0-103.434 46.309-103.434 103.434s46.309 103.434 103.434 103.434c57.125 0 103.434-46.309 103.434-103.434s-46.309-103.434-103.434-103.434zM630.949 460.283h-165.495v108.606h165.495v-108.606zM393.051 155.152c-57.125 0-103.434 46.309-103.434 103.434s46.309 103.434 103.434 103.434c57.125 0 103.434-46.309 103.434-103.434s-46.309-103.434-103.434-103.434z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'filmweb',
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
      default: '#e5a722'
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