<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M1015.357 0h-1015.357v923.516c0.253 26.904 11.188 52.605 30.398 71.449s45.122 29.287 72.034 29.035c55.549 0.356 101.062-44.002 102.112-99.524v-653.437c-0.167-2.664-0.167-5.336 0-8 4.285-53.612 48.638-95.181 102.432-96 56.49 1.374 101.76 47.195 102.432 103.68v398.718c0.504 26.707 11.625 52.114 30.905 70.608s45.134 28.552 71.847 27.951c55.397-0.146 100.706-44.167 102.432-99.52v-146.559c-2.121-37.892 16.894-73.849 49.412-93.433s73.203-19.585 105.72 0c32.517 19.585 51.533 55.542 49.412 93.433v51.84c0 56.554 45.86 102.4 102.432 102.4s102.432-45.846 102.432-102.4v-573.757h-8.643z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'mixsocial',
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
      default: '#ff8126'
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