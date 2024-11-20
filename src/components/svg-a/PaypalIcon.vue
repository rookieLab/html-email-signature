<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M924.201 300.992c36.229 45.824 43.31 109.248 28.642 184.896-36.545 188.48-161.607 253.632-321.38 253.632v0h-24.722c-19.444-0.033-36.031 14.235-39.137 33.664v0l-2.023 10.88-31.107 197.824-1.581 8.448c-3.11 19.453-19.733 33.728-39.2 33.664v0h-135.178l62.215-398.592h83.332c229.891 0 374.743-112.256 420.139-324.416zM589.986 0c109.192 0 194.548 23.168 241.715 77.248 42.931 49.088 54.881 103.168 42.994 182.912 0 0-1.96 12.288-3.225 18.688-41.793 215.488-184.748 289.984-367.409 289.984v0h-92.943c-22.202-0.068-41.156 16.215-44.701 38.4v0l1.517-9.856-49.127 312.96h-195.622c-7.916 0.037-15.452-3.437-20.62-9.507s-7.453-14.125-6.251-22.046v0l131.953-840.383c3.626-22.191 22.607-38.45 44.828-38.4v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'paypal',
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
      default: '#0d47a1'
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