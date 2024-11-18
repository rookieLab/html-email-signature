
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M437.573 639.376l-184.42 319.688h580.034l184.42-319.688h-580.034zM991.432 575.438l-295.312-511.5h-369.239l295.312 511.5h369.239zM289.917 127.875l-289.917 502.309 184.62 319.688 289.917-502.309-184.62-319.688z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'google-drive',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    