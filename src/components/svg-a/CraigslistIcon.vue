
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM437.6 620.768l-159.679 171.295c45.365 37.061 99.885 63.568 159.708 75.713l-0.028-247.008zM586.368 630.208l0.004 237.568c57.641-11.703 110.36-36.738 154.709-71.701l-154.712-165.867zM586.372 156.224l-0.004 268.608 246.556 264.415c29.721-52.427 46.665-112.882 46.665-177.247 0-175.422-125.858-321.797-293.218-355.776zM144.41 512c0 61.964 15.704 120.305 43.393 171.347l249.797-267.891 0.028-259.232c-167.36 33.978-293.218 180.354-293.218 355.776z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'craigslist',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    