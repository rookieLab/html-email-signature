<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M365.333 258.973c13.496-13.474 35.36-13.456 48.835 0.041v0l258.674 259.105c5.609 5.618 13.222 8.775 21.16 8.775v0h193.628v174.842c0 33.44-27.661 61.147-61.045 61.147v0h-84.698c-19.071 0-34.531 15.46-34.531 34.531v0 96.019c0 9.168-3.646 17.96-10.134 24.438-13.496 13.474-35.36 13.456-48.835-0.041v0l-144.572-144.813c-6.478-6.488-15.269-10.134-24.438-10.134v0h-265.152c-33.384 0-61.045-27.707-61.045-61.147v0-215.969c0-9.148 3.63-17.923 10.094-24.397v0l202.019-202.355c0.014-0.014 0.027-0.027 0.041-0.041zM661.533 96c27.505 0 53.88 10.938 73.313 30.403v0l279.95 280.416c6.463 6.474 10.094 15.249 10.094 24.397 0 19.071-15.46 34.531-34.531 34.531v0h-268.683c-9.168 0-17.96-3.646-24.438-10.134v0l-257.679-258.108c-27.074-27.029-70.802-26.993-97.75 0v0l-257.679 258.108c-6.478 6.488-15.269 10.134-24.438 10.134v0h-38.141c-5.764 0-11.292-2.287-15.371-6.359-8.503-8.489-8.515-22.264-0.026-30.767v0l301.716-302.218c19.433-19.465 45.808-30.403 73.313-30.403v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'homeadvisor',
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
      default: '#faa600'
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