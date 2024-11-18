
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M669.437 332.46c0 119.656 16.289 153.114 31.201 227.97 0 0-1.147 13.043-10.783 0s-333.571-496.429-333.571-496.429h-356.284v896h354.792v-291.484c0-107.18-10.783-117.501-22.942-179.313 0 0 1.376-12.703 10.783 0s326.46 470.797 326.46 470.797h354.907v-896h-354.907l0.344 268.46z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'naver',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    