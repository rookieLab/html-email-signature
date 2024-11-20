<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg style="position: relative; top: 4.2px; width: 12.6px;" viewbox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1024 523.874c0 292.672-200.24 500.126-501.668 500.126-288.601 0-522.332-229.109-522.332-512s233.732-512 522.332-512c141.094 0 258.673 50.292 349.884 134.112l-141.805 133.414c-38.481-36.322-106.176-78.93-208.077-78.93-178.149 0-323.518 144.59-323.518 323.405s145.369 323.405 323.518 323.405c206.652 0 284.325-145.987 296.439-220.726h-296.439v-176.022h493.116c4.988 25.845 8.551 51.689 8.551 85.217v0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'google',
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
      default: '#dd4b39'
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