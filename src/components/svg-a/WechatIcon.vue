<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M289.999 295.022c0-27.434-18-45.391-45.5-45.391-27 0-54.5 17.956-54.5 45.391 0 26.935 27.5 44.892 54.5 44.892 27.5 0 45.5-17.956 45.5-44.892zM661.499 547.913c0-17.956-18-35.914-45.5-35.914-18 0-36 17.956-36 35.914 0 18.456 18 36.412 36 36.412 27.5 0 45.5-17.956 45.5-36.412zM543.499 295.022c0-27.434-18-45.391-45-45.391-27.5 0-54.5 17.956-54.5 45.391 0 26.935 27 44.892 54.5 44.892 27 0 45-17.956 45-44.892zM860.999 547.913c0-17.956-18.5-35.914-45.5-35.914-18 0-36 17.956-36 35.914 0 18.456 18 36.412 36 36.412 27 0 45.5-17.956 45.5-36.412zM728 349.89c-11.501-1.496-23.001-1.995-35.001-1.995-172 0-308 128.192-308 285.813 0 26.437 4 51.876 11.5 75.818-11.5 0.998-22.5 1.496-34 1.496-45.5 0-81.5-8.979-127-17.956l-126.5 63.347 36-108.738c-90.5-63.347-145-145.151-145-244.412 0-172.086 163-307.261 362.5-307.261 178 0 334.5 108.24 365.5 253.89v0zM1024 629.716c0 81.305-54.001 153.631-127.001 208l27.5 90.283-99.5-54.37c-36.5 8.979-73 18.456-109 18.456-172.5 0-308-117.717-308-262.369s135.5-262.369 308-262.369c163 0 308 117.717 308 262.369v-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'wechat',
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
      default: '#7bb32e'
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