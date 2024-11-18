
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M631.479 682.743h-242.2v341.257h-357.279v-1024h253.546v238.857l706.454 195.657v589.486h-360.521v-341.257z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'houzz',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    