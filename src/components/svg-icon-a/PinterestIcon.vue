<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M128 367.385c0-227.077 211.251-367.385 425-367.385 196.25 0 375 132.924 375 336.615 0 191.384-99.375 403.692-320.625 403.692-52.5 0-118.749-25.846-144.375-73.846-47.5 185.231-43.75 212.923-148.75 354.462l-8.75 3.077-5.625-6.154c-3.75-38.769-9.375-76.924-9.375-115.693 0-125.538 58.75-307.077 87.5-428.923-15.625-31.385-20-69.538-20-104 0-62.154 43.75-140.923 115-140.923 52.5 0 80.625 39.384 80.625 88 0 80-55 155.077-55 232.615 0 52.923 44.375 89.847 96.25 89.847 143.75 0 188.125-204.307 188.125-313.231 0-145.847-105-225.231-246.875-225.231-165 0-292.5 116.923-292.5 281.846 0 79.384 49.375 120 49.375 139.077 0 16-11.875 72.616-32.5 72.616-3.125 0-7.5-1.231-10.625-1.846-89.375-26.461-121.875-144-121.875-224.615v-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'pinterest',
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
      default: '#bd081c'
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