
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M1024 640v384h-1024v-384h128v256h768v-256h128zM192 704h640v128h-640v-128zM224 569.426l27.166-121.426 612.834 134.574-27.166 121.426-612.834-134.574zM288 307.265l54.593-115.265 585.407 268.735-54.593 115.265-585.407-268.735zM992 349.745l-76.636 98.255-499.364-376.965 55.406-71.035h57.283l463.311 349.745z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'stack-overflow',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    