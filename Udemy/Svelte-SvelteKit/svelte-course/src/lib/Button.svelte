<script>
  export let size = 'small';
  export let shadow = false;
  export let bgColor = 'inherit';
  export let textColor = 'inherit';

  let isLeftHovered;
</script>

<!-- 
  - Apply dynamic class. 
  - Use variable from app.css and redefined using props. If no prop value provided then use the styling of the global variable with inherit above
  - Add event listener which is forwarded from the component call; modifiers can be added here
  - Spread $$restProps to quickly add all props not directly defined above from component call (e.g. disable)
-->
<button 
  on:click
  style:--buttonBgColor={bgColor}
  style:--buttonTextColor={textColor}
  class:size-lg = {size === 'large'}
  class:size-sm = {size === 'small'}
  class:shadow = {shadow}
  {...$$restProps}>
  
<!-- 
  Add named slot if value is passed
  Verfiy slot is used by using $$slots
-->
{#if $$slots.leftContent}
  <div class="left-content" 
  on:mouseenter={() => (isLeftHovered = true)}
  on:mouseleave={() => (isLeftHovered = false)}>
    <!-- Named slot with slot prop to send value -->
    <slot name="leftContent" {isLeftHovered}/>
  </div>
{/if}

  <!-- Slot componenet with fallback text -->
  <slot >Fallback</slot>
</button>
<!-- Class logic could also be writen as 
  class={size === 'large' ? 'size-lg' : 'size-sm'} 
-->

<style lang="scss">

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--buttonBgColor);
    color: var(--buttonTextColor);
    
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    .left-content{
      margin-right: 10px;
    }
    &.size-sm{
      padding: 15px 20px;
    };
    &.size-lg{
      padding: 20px 25px;
    };
    &.shadow{
      box-shadow: 0 0 10px rgba(1,1,1,0.3);
    };
    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
    // Grab global variable from variable.scss
    &:hover{
      background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
    };
    &:active{
      background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
    };
  }
</style>