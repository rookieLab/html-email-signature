
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M163.001 512c0-192.749 156.254-349.003 349.003-349.003s349.005 156.254 349.005 349.003c0 192.749-156.256 349.005-349.005 349.005s-349.003-156.256-349.003-349.005zM512.003 0.004c-282.767 0-511.995 229.228-511.995 511.996s229.229 511.997 511.995 511.997c282.768 0 511.997-229.229 511.997-511.997s-229.229-511.996-511.997-511.996z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'spotlight-2',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    