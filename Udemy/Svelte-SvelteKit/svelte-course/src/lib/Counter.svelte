<script>
  import { init } from "svelte/internal";


  export let initialCount = 0;
  export let maxCount = undefined;

  let count = initialCount;

  function increment(){
    if(count === maxCount) return;
      count += 1;
  };

  $: string = `You have clicked ${count} times.`;

</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{string}</h3>
<h6>Starting value is {initialCount}. Max is {maxCount}.</h6>
<style>
button{
  padding: 15px 20px;
}
</style>