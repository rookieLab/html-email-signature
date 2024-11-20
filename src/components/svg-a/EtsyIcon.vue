
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M387.374 104.571v374.286c130.5 1.143 199.125-5.714 199.125-5.714 52.875-1.714 60.75-15.429 73.125-68l18.562-81.143h57.937l-7.875 184 3.938 182.286h-57.937l-16.312-72.571c-11.813-54.286-34.875-67.429-72.562-68 0 0-48.375-4.571-198-4.571v317.714c0 59.429 32.062 87.429 99.563 87.429h200.813c67.5 0 128.25-6.857 169.875-104.571l52.313-123.429h50.062c-3.938 24.571-30.938 251.429-34.875 301.714-185.063-6.857-264.375-6.857-264.375-6.857h-353.25l-211.5 6.857v-58.286l71.437-14.286c50.062-9.714 65.25-24.571 65.812-66.286 3.375-138.286 4.5-367.429 4.5-367.429s1.687-229.713-4.5-368.571c-1.687-47.429-15.75-58.857-65.812-68.571l-71.437-13.714v-58.286l211.5 6.857h394.875c0 0 78.188 0 210.375-15.429-7.875 87.429-17.437 289.143-17.437 289.143h-52.313l-18-70.857c-21.938-88.571-51.188-136-105.187-136h-308.25c-23.063 0-24.187 8-24.187 22.286l-0.001-0.001z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'etsy',
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
      default: '#d5641c'
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
    