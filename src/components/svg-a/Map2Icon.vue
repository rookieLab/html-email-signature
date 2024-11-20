<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M292.286 0c9.705 0 18.268 8.563 18.268 18.268v840.322c0 6.85-3.996 13.13-9.705 15.984l-274.018 146.143c-2.854 1.712-5.708 2.284-8.563 2.284-9.705 0-18.268-8.563-18.268-18.268v-840.322c0-6.85 3.996-13.13 9.705-15.984l274.018-146.143c2.854-1.712 5.708-2.284 8.563-2.284zM1004.733 0c9.705 0 18.268 8.563 18.268 18.268v840.322c0 6.85-3.996 13.13-9.705 15.984l-274.018 146.143c-2.854 1.712-5.708 2.284-8.563 2.284-9.705 0-18.268-8.563-18.268-18.268v-840.322c0-6.85 3.996-13.13 9.705-15.984l274.018-146.143c2.854-1.712 5.708-2.284 8.563-2.284zM365.357 0c2.854 0 5.708 0.57 7.992 1.712l292.286 146.143c6.28 3.426 10.276 9.705 10.276 16.555v840.322c0 9.705-8.563 18.268-18.268 18.268-2.854 0-5.708-0.57-7.992-1.712l-292.286-146.143c-6.28-3.426-10.276-9.705-10.276-16.555v-840.322c0-9.705 8.563-18.268 18.268-18.268v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'map-2',
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
      default: '#f4b400'
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