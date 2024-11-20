<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M790.726 543.561c-1.293-129.555 105.655-191.689 110.434-194.776-60.093-87.934-153.7-99.98-187.059-101.373-79.664-8.066-155.444 46.902-195.875 46.902-40.329 0-102.718-45.709-168.787-44.509-86.831 1.291-166.895 50.489-211.605 128.255-90.216 156.545-23.103 388.461 64.827 515.423 42.966 62.143 94.2 131.947 161.468 129.454 64.779-2.585 89.275-41.917 167.592-41.917s100.33 41.917 168.885 40.63c69.706-1.295 113.871-63.336 156.539-125.673 49.342-72.098 69.658-141.899 70.855-145.484-1.546-0.705-135.927-52.185-137.274-206.932zM661.916 163.362c35.703-43.316 59.802-103.411 53.228-163.362-51.428 2.094-113.767 34.257-150.663 77.474-33.11 38.339-62.087 99.529-54.321 158.281 57.41 4.48 116.015-29.176 151.756-72.393v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'apple',
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
      default: '#6c6d6f'
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