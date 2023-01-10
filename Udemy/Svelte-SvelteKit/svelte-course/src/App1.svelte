<script>
  import Button from "./lib/Button.svelte";
  // Import icon
  import DiStackoverflow from 'svelte-icons/di/DiStackoverflow.svelte'
  import DiStreamline from 'svelte-icons/di/DiStreamline.svelte'

</script>

<!-- 
  - Add component.
  - Add event listener; this must be forwared onto the button element within the component for it to work. Only 'once' modifier is allowed on the component; other modifiers have to be added to the button html element inside the component
 -->
<Button  
  size="large" 
  shadow  
  on:click|once={()=>alert(true)}
  enable>

<!--   
  - Allow user to pass in icon to named slot "leftContent"
  - Grab named slot prop to know when mouse is over icon, pass differnt icon when mouseover 
-->
  <div style:width="20px" slot="leftContent" let:isLeftHovered>
    {#if isLeftHovered}    
      <DiStackoverflow/>
    {:else}
      <DiStreamline/>
    {/if}
  </div>

  Passed Text
</Button>

<style>

</style>