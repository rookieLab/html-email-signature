<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M0 527.516c0-123.591 100.19-223.781 223.781-223.781s223.781 100.19 223.781 223.781c0 123.591-100.19 223.781-223.781 223.781s-223.781-100.19-223.781-223.781zM575.438 527.516c0-123.591 100.19-223.781 223.781-223.781s223.781 100.19 223.781 223.781c0 123.591-100.19 223.781-223.781 223.781s-223.781-100.19-223.781-223.781z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'flickr',
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
      default: '#ff0084'
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