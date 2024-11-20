<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M205.22 192c128.932 0 217.903 51.968 217.903 147.2 0 79.232-61.63 131.52-124.789 147.072 92.094 19.712 151.684 75.648 152.069 164.096 0.508 112.256-93.944 180.032-172.463 180.416-32.924 0.117-236.048 1.030-271.899 1.192l-5.403 0.024-0.637-640h205.22zM778.816 192c128.932 0 217.903 51.968 217.903 147.2 0 79.232-61.63 131.52-124.789 147.072 92.094 19.712 151.684 75.648 152.069 164.096 0.508 112.256-93.944 180.032-172.463 180.416-14.455 0.051-61.714 0.256-113.221 0.483l-17.287 0.076c-60.782 0.269-123.028 0.549-141.39 0.632l-5.403 0.024-0.637-640h205.22zM203.881 551.616h-80.431v182.016h100.316c43.211 0 99.232-29.248 99.232-92.544 0.064-53.568-35.69-89.472-119.117-89.472zM777.477 551.616h-80.431v182.016h100.316c43.211 0 99.232-29.248 99.232-92.544 0.064-53.568-35.69-89.472-119.117-89.472zM193.493 291.776h-70.106v163.392h87.441c37.73-0.064 86.549-31.232 86.549-83.136s-31.102-80.256-103.885-80.256zM767.089 291.776h-70.106v163.392h87.441c37.73-0.064 86.549-31.232 86.549-83.136s-31.102-80.256-103.885-80.256z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'bb',
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
      default: '#eb0a15'
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