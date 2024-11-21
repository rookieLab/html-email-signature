<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M657.143 435.429c0 42.286-34.286 76.571-77.143 76.571v0h-144.571v-153.714h144.571c42.857 0 77.143 34.286 77.143 77.143zM759.429 435.429c0-99.429-80-179.429-179.429-179.429v0h-247.429v512h102.857v-153.714h144.571c99.429 0 179.43-80 179.43-178.857v0zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512c0-282.857 229.143-512 512-512s512 229.143 512 512z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'product-hunt',
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
      default: '#da552f'
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