<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M528 518.286c-141.040 0-256.129-116-256.129-258.857 0-143.429 115.088-259.429 256.129-259.429s256.129 116 256.129 259.429c0 142.857-115.088 258.857-256.129 258.857zM528 131.429c-69.392 0-125.808 57.143-125.808 128 0 70.286 56.416 127.429 125.808 127.429s125.808-57.143 125.808-127.429c0-70.857-56.416-128-125.808-128v0zM823.055 549.714c24.823 51.429-3.385 76-67.699 118.286-54.159 34.857-128.629 48.571-177.711 53.714l41.183 41.143 150.63 152.571c22.566 23.429 22.566 61.143 0 84l-6.77 7.429c-23.131 22.857-60.365 22.857-83.495 0-37.799-38.857-93.087-94.857-150.63-153.143l-150.63 153.143c-23.131 22.857-60.365 22.857-82.932 0l-6.77-7.429c-23.131-22.857-23.131-60.571 0-84 38.363-38.857 93.087-94.857 150.63-152.571l40.62-41.143c-48.518-5.143-124.115-18.286-178.839-53.714-64.314-42.286-92.522-66.857-67.699-118.286 14.668-29.143 54.724-53.714 107.755-11.429 0 0 71.648 57.714 187.301 57.714s187.301-57.714 187.301-57.714c53.031-42.286 93.087-17.714 107.755 11.429h-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'ok',
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
      default: '#ed812b'
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