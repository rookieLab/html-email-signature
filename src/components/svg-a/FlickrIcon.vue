
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M0 527.516c0-123.591 100.19-223.781 223.781-223.781s223.781 100.19 223.781 223.781c0 123.591-100.19 223.781-223.781 223.781s-223.781-100.19-223.781-223.781zM575.438 527.516c0-123.591 100.19-223.781 223.781-223.781s223.781 100.19 223.781 223.781c0 123.591-100.19 223.781-223.781 223.781s-223.781-100.19-223.781-223.781z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'flickr',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    