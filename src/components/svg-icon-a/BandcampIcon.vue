<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M596.752 512v104.431h0.787c12.078-19.774 37.395-32.040 59.995-32.040 63.488 0 94.272 49.070 94.272 108.808 0 54.969-27.261 106.801-86.88 106.801-27.267 0-56.484-6.712-69.748-33.62h-0.769v28.090h-42.075l-0.014-281.958-155.237 281.355h-333.083l155.543-281.867h377.209zM869.239 584.402c46.743 0 86.487 23.73 90.761 73.982h-44.418c-3.511-24.924-21.425-38.39-45.968-38.39-22.993 0-55.321 12.289-55.321 74.386 0 34.024 14.796 70.032 53.372 70.032 25.705 0 43.619-17.428 47.917-46.7h44.406c-8.185 53.008-40.537 82.287-92.323 82.287-63.113 0-97.766-45.488-97.766-105.619 0-61.711 33.109-109.979 99.34-109.979zM651.674 619.995c-37.384 0-56.484 28.886-56.484 72.396 0 41.134 20.656 72.010 56.484 72.010 40.537 0 55.715-36.4 55.715-71.981 0-37.173-19.124-72.396-55.727-72.396l0.012-0.029z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'bandcamp',
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
      default: '#639aa9'
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