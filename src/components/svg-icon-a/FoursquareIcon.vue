
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 10%;width: 80%;height: 80%;">
<path d="M750.278 267.027l22.846-119.363c4.322-19.689-10.496-35.070-27.168-35.070h-439.62c-19.759 0-33.342 17.842-33.342 33.225v677.415c0 1.846 1.852 2.461 3.705 0.615 161.77-193.811 179.677-216.576 179.677-216.576 18.523-21.535 25.933-25.227 53.1-25.227h147.569c20.376 0 32.107-17.228 33.96-27.072s19.14-99.674 22.846-117.517c3.705-17.844-12.966-36.301-29.638-36.301h-181.529c-24.081 0-41.369-17.228-41.369-41.224v-25.841c0-23.996 17.288-40.608 41.369-40.608h213.635c14.818 0 31.49-13.536 33.96-26.456h-0.001zM890.437 130.437c-22.846 110.749-91.381 460.839-97.556 486.066-7.409 28.918-18.523 79.37-88.912 79.37h-167.327c-6.792 0-7.409-0.615-13.583 6.152 0 0-4.322 4.922-263.032 303.945-20.376 23.38-53.717 19.073-66.067 14.151s-33.96-19.689-33.96-60.297v-867.534c0-35.686 22.228-92.291 97.556-92.291h548.291c80.268 0 101.879 45.53 84.59 130.438v-0.001zM890.437 130.437l-97.556 486.066c6.174-25.227 74.711-375.316 97.556-486.066z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'foursquare',
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
      default: '#f94877'
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
    