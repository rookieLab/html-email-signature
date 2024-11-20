
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M511.5 0c-282.494 0-511.5 229.006-511.5 511.5s229.006 511.5 511.5 511.5c282.494 0 511.5-229.006 511.5-511.5s-229.006-511.5-511.5-511.5zM823.831 589.023c-36.762 142.577-165.197 242.166-312.325 242.166-147.138 0-275.581-99.589-312.349-242.183-6.226-24.134 8.344-48.838 32.48-55.070 3.706-0.957 7.521-1.445 11.327-1.445 20.604 0 38.59 13.958 43.745 33.943 26.486 102.648 118.926 174.34 224.794 174.34 105.875 0 198.308-71.69 224.78-174.34 5.147-19.986 23.127-33.949 43.723-33.949 3.818 0 7.643 0.49 11.365 1.455 11.681 3.013 21.505 10.408 27.641 20.822 6.136 10.406 7.846 22.574 4.817 34.263v0z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'ello',
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
      default: '#000'
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
    