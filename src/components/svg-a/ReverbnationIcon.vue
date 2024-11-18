
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M1023.662 381.304l-390.224-1.281-123.175-372.341-120.699 372.341-388.902 1.281 314.424 228.552-121.851 373.409h1.238l318.351-229.876 315.663 229.876-121.851-372.598 317.028-229.748z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'reverbnation',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    