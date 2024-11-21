<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M116.002 0c-1.279 3.964-2.558 7.885-2.558 13.128v990.137c0 9.25 2.6 14.493 7.843 19.736l486.565-515.465-491.851-507.536zM640.674 541.679l125.786 129.793-179.58 102.3c0 0-228.257 129.75-354.129 202l407.923-434.093zM674.816 506.258l134.951 140.322c21.142-11.765 186.314-106.221 209.886-119.35 24.893-14.407 22.378-34.1 1.236-44.585-19.565-10.869-184.737-105.497-209.715-120.842l-136.358 144.456zM640.589 472.158l127.193-135.079-181.54-103.622c0 0-295.946-169.307-394.41-225.827l448.757 464.528z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'google-play',
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