<!-- Informs Svelte that whenever we call this component we will send it a new array and not a mutated array -->
<svelte:options immutable={true}/>

<script>
  import Button from "./Button.svelte";
  import {createEventDispatcher} from "svelte"

  // Establish component props
  export let todos = [];

  // Component variables
  let inputText ='';

  // Initialize a custom event dispatcher that the parent component can listen for
  const dispatch = createEventDispatcher();

  // Functions used to create custom events using dispatcher object. 
  // Second dispatcher option allows for sending data to event listener 
  // Add option (cancelable) to allow user to prevent further code within the function from running when called by parent component using preventdefault. 

  function handleAddTodo(){
    const isNotCancelled = dispatch('addtodo', {
      title: inputText
    },{
      cancelable:true
    });

    // If preventdefault option used this will not run
    if (isNotCancelled){
      inputText = ''
    }
  }

  // Forward id of item to be removed
  function handleRemoveTodo(id){
    dispatch('removetodo', {
      id
    });
  }
</script>

<div class="todo-list-wrapper">
  <ul> 
  <!-- 
    For each loop
    Can pull specific values from the object or object
    Index property can be added
    Value in () is the key that can be used to id each item
    -->
    {#each todos as {title, id, completed}, index (id)}

      <!-- Const option for if and for loops -->
      {@const number = index + 1}

      <li>
        <label>
          <!-- Use completed value to determine check -->
          <input type="checkbox" checked={completed}/>
          {number} - {title}
          <!-- Call function for custom event dispatcher passing id -->
          <button on:click={() => handleRemoveTodo(id)}>Remove</button>
        </label>
      </li>
    {/each}
  </ul>

  <!-- Call function for custom event dispatcher when form submitted -->
  <!-- Prevent default form action from reloading the page -->
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <!-- Bind value of input to variable -->
    <input bind:value={inputText} />
    <!-- Disable button if no text entered -->
    <Button type='submit' disabled={!inputText}>Add</Button>
  </form>
</div>