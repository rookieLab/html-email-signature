<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M1023.514 271.040c-4.601 100.794-74.208 239.031-208.823 414.307-139.216 182.967-257.029 274.653-353.439 274.653-59.607 0-110.212-55.659-151.417-167.18-27.603-102.211-55.006-204.421-82.609-306.632-30.603-111.521-63.407-167.18-98.611-167.18-7.601 0-34.404 16.394-80.409 48.778l-48.205-62.743c50.606-44.932 100.411-89.864 149.417-134.797 67.408-58.898 118.013-89.864 151.817-93.103 79.609-7.691 128.814 47.361 147.216 165.359 19.802 127.308 33.604 206.445 41.405 237.412 23.003 105.651 48.205 158.477 75.808 158.477 21.402 0 53.606-34.205 96.611-102.818 42.805-68.41 65.807-120.629 69.008-156.453 6.201-59.1-16.802-88.852-69.008-88.852-24.603 0-49.806 5.667-75.808 17.001 50.406-166.775 146.416-247.734 288.432-243.079 105.012 2.834 154.617 71.851 148.617 206.85z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'vimeo',
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
      default: '#1ab7ea'
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