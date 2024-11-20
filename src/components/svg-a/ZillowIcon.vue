<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M740.865 769.637c-316.704 18.968-661.114 133.63-697.431 149.614l42.156-118.881c107.458-49.7 374.035-147.867 702.717-171.31-6.394 24.296-40.963 113.852-47.953 140.023l0.512 0.554v-0.001zM853.779 449.566c0 0-15.473 32.608-30.221 77.321-125.914 7.673-325.442 49.189-422.627 84.398 50.554-46.035 370.241-367.002 370.241-367.002 123.315 84.355 251.829 188.573 251.829 188.573l-169.222 16.71zM105.71 463.632c70.203-31.969 267.046-91.474 455.448-135.591 0 0-362.185 334.393-462.865 437.972l83.119-225.060c-64.62 9.591-93.093 13.427-181.412 31.969l105.668-108.737 0.043-0.554-0.001 0.001zM557.536 104.218c31.286 15.302 147.056 93.988 188.36 123.101-131.967 3.154-389.38 60.058-496.667 95.906 88.021-66.836 251.615-193.091 308.307-219.434v0.427z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'zillow',
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
      default: '#1277e1'
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