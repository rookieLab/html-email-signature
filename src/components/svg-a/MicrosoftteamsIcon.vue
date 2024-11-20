<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M515.121 265.422c0-25.276-20.49-45.767-45.766-45.767h-101.82c-1.058-6.951-1.607-14.069-1.607-21.316 0-77.56 62.875-140.434 140.436-140.434s140.434 62.875 140.434 140.434c0 74.618-58.197 135.644-131.677 140.166v-73.083zM515.121 723.085c0 25.278-20.49 45.768-45.766 45.768h-192.157c31.214 96.763 122.014 166.766 229.166 166.766 91.989 0 171.93-51.595 212.46-127.425 16.16 4.593 33.217 7.051 50.849 7.051 102.493 0 185.573-83.081 185.573-185.573 0-4.613-0.166-9.187-0.497-13.717 0.327-2.063 0.497-4.184 0.497-6.344v-170.528c0-22.16-17.964-40.124-40.121-40.124h-208.033c-0.039 0-0.073 0-0.107 0h-191.863v324.126zM910.126 238.463c0-55.4-44.91-100.31-100.313-100.31-55.398 0-100.308 44.91-100.308 100.31s44.91 100.31 100.308 100.31c55.403 0 100.313-44.91 100.313-100.31zM56.339 276.219c-20.069 0-36.339 16.269-36.339 36.339v363.394c0 20.066 16.27 36.337 36.339 36.337h363.392c20.070 0 36.339-16.272 36.339-36.337v-363.394c0-20.070-16.269-36.339-36.339-36.339h-363.392zM328.733 416.984h-68.045v186.352h-41.218v-186.352h-67.732v-36.289h176.994v36.289z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'microsoft-teams',
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
      default: '#4e5fbf'
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