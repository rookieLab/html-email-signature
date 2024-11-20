<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M655.829 22.335c-203.066 0-368.28 165.215-368.28 368.28 0 202.469 165.215 367.129 368.28 367.129 202.469 0 367.172-164.703 367.172-367.129 0-203.066-164.703-368.28-367.172-368.28zM0.128 1003.265h179.877v-980.93h-179.877v980.93z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'patreon',
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
      default: '#f96854'
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
