<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M896 0c70.656 0 128 57.344 128 128v768c0 70.656-57.344 128-128 128h-768c-70.656 0-128-57.344-128-128v-768c0-70.656 57.344-128 128-128h768zM384 133.12h-189.44c-33.792 0-61.44 27.648-61.44 61.44v0 581.12c0 33.792 27.648 61.44 61.44 61.44v0h189.44c33.792 0 61.44-27.648 61.44-61.44v0-581.12c0-33.792-27.648-61.44-61.44-61.44v0zM829.44 133.12h-189.44c-33.792 0-61.44 27.648-61.44 61.44v0 325.12c0 33.792 27.648 61.44 61.44 61.44v0h189.44c33.792 0 61.44-27.648 61.44-61.44v0-325.12c0-33.792-27.648-61.44-61.44-61.44v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'trello',
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
      default: '#0088d7'
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