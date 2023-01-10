<script>
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid} from "uuid";

// Array of todos
let todos = [
  {
    id: uuid(),
    title: 'Todo 1',
    completed: true
  },
  {
    id: uuid(),
    title: 'Todo 2',
    completed: false
  },
  {
    id: uuid(),
    title: 'Todo 3',
    completed: true
  }]
// Add todo to array
function handleAddTodo(event){
  // event.preventDefault();
  // Verify text is enter in input
  if(!event.detail.title) return
    
    todos = [...todos, {
      id: uuid(),
      title: event.detail.title,
      completed: false
    }]
  }
// Remove todo from array
function handleRemoveTodo(event){
    todos = todos.filter((item) => item.id !== event.detail.id);
  }

</script>

<h2>{todos.length} Todos</h2>
<!-- Add component passing in todos array and listen for custom events to manipulate the array -->
<TodoList 
  {todos} 
  on:addtodo={handleAddTodo}
  on:removetodo={handleRemoveTodo}/>

<style>

</style>