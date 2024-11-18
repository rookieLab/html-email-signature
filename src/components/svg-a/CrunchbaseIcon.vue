
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M481.897 568.128h-110.015c-40.398-86.776-157.071-107.571-225.942-39.987-69.119 67.293-47.902 181.423 40.895 220.924v0.049c70.113 31.387 152.947 1.020 185.047-67.584h110.015c-68.573 274.563-481.897 225.977-481.897-56.701 0-282.92 413.325-331.507 481.897-56.701zM642.795 160v266.206c35.479-23.516 76.623-37.46 119.307-40.764h17.839c226.191-0.486 330.242 274.806 158.413 418.283l0.050 0.049c-20.969 17.734-44.523 31.387-70.411 41.007-74.287 28.083-158.115 18.997-224.402-24.779v24.779h-100.176v-684.781h99.381zM644.932 624.634c-1.839 76.427 61.069 139.444 139.232 139.444s141.021-63.017 139.481-139.444c-4.124-177.633-274.838-177.633-278.713 0z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'crunchbase',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    