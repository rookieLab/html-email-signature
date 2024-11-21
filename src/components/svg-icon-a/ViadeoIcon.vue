<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M832 186.463l-189.375 358.153 15 19.077h174.375v255.385h-316.875l-27.5 18.462-88.75 168c-0.625 0-17.5 17.231-18.75 18.462h-188.125v-186.462l189.375-358.769-15-18.462h-174.375v-255.385h316.875l27.5-18.462 88.75-168c0.625 0 17.5-17.231 18.75-18.462h188.125v186.463z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'viadeo',
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
      default: '#f07355'
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