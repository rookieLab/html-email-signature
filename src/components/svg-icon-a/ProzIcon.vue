<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M512 1024c-282.77 0-512-229.229-512-512s229.23-512 512-512c282.771 0 512 229.23 512 512s-229.229 512-512 512zM766.042 332.227h-469.283v222.666h-123.222v34.589h123.222v101.603h34.588v-101.603h431.2l2.022-0.496-4.106-16.797c4.106 16.797 4.134 16.79 4.141 16.79l0.042-0.010 0.109-0.029 0.304-0.077 0.966-0.259c0.797-0.221 1.894-0.538 3.251-0.963 2.71-0.851 6.474-2.134 10.957-3.946 8.922-3.606 20.928-9.395 33.19-18.154 24.707-17.642 51.005-47.875 54.016-96.042 2.918-46.691-13.472-79.29-35.616-101.056-21.552-21.184-47.574-31.21-63.53-35.597l-2.253-0.621zM758.093 554.893h-426.746v-188.077h429.942c12.851 3.802 31.373 11.635 46.288 26.298 15.184 14.925 27.616 37.811 25.341 74.227-2.182 34.941-20.742 56.592-39.594 70.054-9.517 6.794-18.966 11.366-26.054 14.23-3.52 1.424-6.4 2.403-8.333 3.008l-0.845 0.259z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'proz',
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
      default: '#2e6969'
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