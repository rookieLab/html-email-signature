<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M962.882 767.035v-531.951c-12.034-70.548-87.801 10.329-87.801 10.329l-99.83 82.323v-156.332c0.112-16.318-6.261-32.013-17.72-43.634-11.454-11.621-27.058-18.218-43.374-18.341h-462.439l-215.002 232.407v480.305c-0.11 16.321 6.264 32.012 17.72 43.637 11.457 11.62 27.058 18.217 43.377 18.339h616.344c16.316-0.122 31.92-6.719 43.374-18.339 11.459-11.625 17.832-27.316 17.72-43.637v-141.097l142.907 118.789c51.644 6.817 44.724-32.797 44.724-32.797zM573.835 503.642v161.855h-311.065l0.568-323.663h310.497v161.807z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'google-meet',
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
      default: '#00a090'
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