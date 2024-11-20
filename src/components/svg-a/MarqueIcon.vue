<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M20.338 369.414h-20.338l3.051-145.414h586.741l3.050 145.414h-19.322c-7.117-39.657-16.269-68.131-28.47-86.435-12.205-17.287-24.407-28.472-38.644-32.54-13.219-4.067-36.608-6.101-69.145-6.101h-97.623v427.089c0 46.778 1.018 78.301 3.050 93.555 2.035 15.252 8.138 25.421 18.304 32.538 10.17 7.12 28.474 11.187 54.912 11.187h29.491v20.336h-300.998v-20.336h31.524c25.422 0 43.725-3.049 53.894-10.169 10.169-6.1 16.27-16.269 19.321-30.506s4.068-45.76 4.068-96.605v-427.089h-89.486c-38.642 0-65.081 2.034-78.3 6.101-13.219 3.051-26.439 14.236-37.624 33.557-12.203 18.304-21.355 46.775-27.456 85.418zM924.342 278.912c3.050-13.22 9.152-22.372 18.304-27.456 9.152-4.068 29.488-7.118 58.984-7.118h22.37v-20.338h-186.093l-219.648 500.307-205.408-462.682h-55.929v82.369l215.58 484.035h21.354l238.966-541.999v385.397c0 50.845-1.017 82.368-4.067 96.605s-9.152 24.406-19.321 30.506c-10.17 6.102-27.456 10.169-52.877 10.169h-21.354v20.336h288.797v-20.336h-27.459c-27.456 0-45.76-4.067-55.93-11.187-9.152-7.117-15.251-18.304-18.304-32.538-3.049-14.236-3.049-45.76-3.049-93.555v-296.928c1.017-49.827 2.035-82.368 5.084-95.587z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'marque',
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
      default: '#364c59'
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