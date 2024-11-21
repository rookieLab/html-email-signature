  <template>
    <a :href="url" target="_blank"
      :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
        style="position: relative; top: 10%;width: 80%;height: 80%;">
        <path
          d="M784.114 694.605l28.643 57.28-14.32 14.323-200.503-78.765-7.161-78.774 193.341 85.936zM554.971 207.662l-42.963-95.515v868.887l85.93-64.452-42.967-708.92zM913.013 809.174l-401.005 214.826 315.075-264.957-315.075-680.275v-64.447l401.005 794.854zM483.358 57.286l14.324-57.286v866.464l-64.448-28.643 50.124-780.535zM433.23 673.123v-28.649l-221.983 100.256-7.161 14.316 28.643 14.32 200.501-100.243zM454.718 200.509l7.162-100.257-350.88 708.926 386.685 214.822v-93.091l-307.916-164.698 264.949-565.702z"
          :fill="color"></path>
      </svg>
    </a>
  </template>

<script>
export default {
  name: 'actors-access',
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
      default: '#ce493f'
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