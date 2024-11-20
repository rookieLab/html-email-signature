<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M340.811 240.336v669.632c0 17.697-8.564 34.253-27.974 34.253-6.85 0-13.13-1.712-18.839-4.567l-265.455-133.013c-15.984-7.992-28.543-28.543-28.543-45.669v-650.793c0-14.272 6.85-27.402 22.264-27.402 9.134 0 17.126 4.567 25.118 8.563l291.715 146.143c0.57 0.57 1.712 2.284 1.712 2.854v0zM377.345 297.995l304.845 494.374-304.845-151.852v-342.523zM1023.001 308.27v601.698c0 18.839-10.846 31.969-29.685 31.969-9.705 0-18.839-2.854-26.831-7.422l-251.754-125.591 308.27-500.654zM1021.289 239.766c0 2.284-295.141 481.244-317.975 517.78l-222.64-361.933 184.962-300.849c6.28-10.276 17.697-15.984 29.685-15.984 5.138 0 10.276 1.142 14.843 3.426l308.841 154.135c1.142 0.57 2.284 1.712 2.284 3.426v-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'medium',
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
      default: '#00ab6c'
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