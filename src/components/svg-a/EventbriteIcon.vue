
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M450.17 241.308c113.366-25.641 226.733 21.368 289.714 111.111l-501.052 115.385c16.795-109.687 97.971-200.855 211.337-226.496zM742.683 664.385c-39.188 58.405-99.371 99.715-167.95 115.385-113.366 25.641-228.133-21.368-291.114-112.536l740.381-169.516c-1.4-34.188-5.598-68.376-12.596-101.14-62.981-274.929-338.7-447.294-614.418-383.191s-447.868 337.607-383.487 613.961c64.381 276.354 338.7 447.294 614.418 383.191 162.352-37.037 288.315-148.148 352.696-289.174l-237.93-56.98z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'eventbrite',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    