<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">

    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path :fill="color"
        d="M1023.914667 512c0-282.794667-229.205333-512-511.957334-512C229.205333 0 0 229.205333 0 512c0 255.488 187.221333 467.285333 431.957333 505.685333v-357.717333H301.994667v-148.010667h129.962666V399.189333c0-128.341333 76.458667-199.210667 193.365334-199.210666 56.021333 0 114.602667 9.984 114.602666 9.984v125.994666H675.413333c-63.573333 0-83.413333 39.466667-83.413333 79.957334V512h141.994667l-22.698667 148.010667h-119.296v357.717333c244.736-38.4 431.957333-250.197333 431.957333-505.728z">

      </path>
    </svg>

  </a>
</template>

<script>
export default {
  name: 'facebook',
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
      default: '#1877F2'
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