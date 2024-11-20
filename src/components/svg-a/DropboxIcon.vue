
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M256 96l-256 160.8 256 160.8 256-160.8 256 160.8 256-160.8-256-160.8-256 160.8-256-160.8zM256 739.2l-256-160.8 256-160.8 256 160.8-256 160.8z" :fill="color"></path>
<path d="M512 578.4l256-160.8 256 160.8-256 160.8-256-160.8zM512 953.6l-256-160.8 256-160.8 256 160.8-256 160.8z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'dropbox',
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
      default: '#285ff5'
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
    