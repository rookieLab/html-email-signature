
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 10%;width: 80%;height: 80%;">
<path d="M956.862 383.625h-57.35c-35.132 0-65.924-29.713-68.323-63.938v0c0.004-182.49-147.114-319.688-330.867-319.688h-167.66c-183.633 0-332.531 147.856-332.661 330.343v362.444c0 182.476 149.028 330.214 332.659 330.214h358.070c183.769 0 332.272-147.738 332.272-330.214v-234.153c0-36.466-29.411-75.009-66.139-75.009zM319.688 255.75h191.813c35.166 0 63.938 28.772 63.938 63.938s-28.772 63.938-63.938 63.938h-191.813c-35.166 0-63.938-28.772-63.938-63.938s28.772-63.938 63.938-63.938zM703.313 767.251h-383.625c-35.166 0-63.938-28.772-63.938-63.938s28.772-63.938 63.938-63.938h383.625c35.166 0 63.938 28.772 63.938 63.938s-28.772 63.938-63.938 63.938z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'blogger',
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
      default: '#f57d00'
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
    