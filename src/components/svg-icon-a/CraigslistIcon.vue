
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 10%;width: 80%;height: 80%;">
<path d="M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM437.6 620.768l-159.679 171.295c45.365 37.061 99.885 63.568 159.708 75.713l-0.028-247.008zM586.368 630.208l0.004 237.568c57.641-11.703 110.36-36.738 154.709-71.701l-154.712-165.867zM586.372 156.224l-0.004 268.608 246.556 264.415c29.721-52.427 46.665-112.882 46.665-177.247 0-175.422-125.858-321.797-293.218-355.776zM144.41 512c0 61.964 15.704 120.305 43.393 171.347l249.797-267.891 0.028-259.232c-167.36 33.978-293.218 180.354-293.218 355.776z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'craigslist',
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
      default: '#b345e9'
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
    