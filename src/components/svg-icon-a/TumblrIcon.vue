<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M751.799 817.796l48.201 145.838c-18.075 27.69-100.017 59.073-173.523 60.304-218.712 3.693-301.255-158.76-301.255-273.214v-334.749h-101.222v-132.3c151.833-55.997 188.586-196.296 197.021-276.291 0.602-4.922 4.82-7.384 7.23-7.384h147.013v260.908h200.637v155.068h-201.239v318.75c0 43.074 15.665 102.764 96.402 100.917 26.511-0.615 62.059-8.615 80.736-17.845l-0.001-0.002z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'tumblr',
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
      default: '#1c2d3f'
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