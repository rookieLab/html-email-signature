
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
    <svg viewbox="0 0 960 1024" xmlns="http://www.w3.org/2000/svg">
<path d="M460.544 250.096l-234.496 103.424 220.32-6.080 124.48 88.864 144.864-82.784 268.96 82.784-268.96-186.24-144.832 73.6-110.336-73.6zM154.144 526.896l-178.816 60.096 153.344 8.16 81.472 68.672 105.184-49.344 182.144 72.576-176.32-144.384-100.256 38.848-66.752-54.624zM587.040 773.936l114.624-86.784 63.36 28.544 64.768-45.152 113.92 58.56-108.32-6.624-60.64 51.456-72-35.2-115.712 35.2z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'bluesky',
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
      default: '#0285fb'
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
    