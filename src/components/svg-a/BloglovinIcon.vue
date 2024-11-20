
  <template>
<a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M451.578 108.659c162.186 0 244.87 104.44 244.87 218.374 0 107.604-66.783 180.396-146.286 196.22 92.224 12.659 162.186 101.275 162.186 205.714 0 127.214-79.473 227.050-238.418 230.917l-9.632 0.116h-464.298v-851.341h451.578zM416.596 608.703h-235.329v193.055h235.329c69.963 0 111.304-34.813 108.124-94.945 0-53.802-38.161-98.11-108.124-98.11zM909.516 96c60.422 0 114.484 47.473 114.484 129.758 0 94.945-54.062 180.396-133.565 237.363v0l-69.963-56.967c41.342-22.154 89.043-72.791 98.584-120.264-6.36 3.165-15.901 3.165-25.441 3.165-47.702 0-85.863-37.978-85.863-91.78s47.702-101.275 101.764-101.275zM410.236 270.066h-228.969v177.231h228.969c60.422 0 98.584-34.813 98.584-88.615 0-50.637-38.161-88.615-98.584-88.615z" :fill="color"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'bloglovin',
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
    