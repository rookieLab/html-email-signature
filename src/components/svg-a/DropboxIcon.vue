
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M256 96l-256 160.8 256 160.8 256-160.8 256 160.8 256-160.8-256-160.8-256 160.8-256-160.8zM256 739.2l-256-160.8 256-160.8 256 160.8-256 160.8z" fill="#ffffff"></path>
<path d="M512 578.4l256-160.8 256 160.8-256 160.8-256-160.8zM512 953.6l-256-160.8 256-160.8 256 160.8-256 160.8z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'dropbox',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    