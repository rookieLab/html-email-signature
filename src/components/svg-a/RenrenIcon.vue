
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M755.334 960.757c-72.667 40.368-156 63.243-245.333 63.243-88.667 0-172-22.876-244.666-63.243 118-75.354 213.333-189.056 244.666-322.27 32 133.214 127.333 246.917 245.333 322.27zM425.334 0v326.308c0 230.098-126 427.901-304.667 515.364-75.333-90.155-120.667-205.876-120.667-333.035 0-255.664 184-467.596 425.334-508.636v0zM1024 508.636c0 127.159-45.333 242.881-120.667 333.035-178.667-87.464-304.667-285.267-304.667-515.364v-326.308c241.333 41.041 425.334 252.972 425.334 508.636v0z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'renren',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    