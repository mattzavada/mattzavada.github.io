const todos = [
  {
    text: "Take shower",
    completed: false,
    dueDate: new Date("2023", "01", "20"),
  },
  {
    text: "Study for meeting",
    completed: false,
    dueDate: new Date("2023", "02", "20"),
  },
  {
    text: "Walk dog",
    completed: true,
    dueDate: new Date("2022", "01", "20"),
  },
  {
    text: "Eat dinner",
    completed: false,
    dueDate: new Date("2023", "01", "02"),
  },
  {
    text: "Clean car",
    completed: true,
    dueDate: new Date("2023", "01", "20"),
  },
];

// Object for tracking filters
const filters = {
  searchText: "",
  filterCompleted: true,
};

//Render todos on screen
const renderTodos = function (array, filter) {
  // Clear current list of todos and sub-heading
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#left-to-complete").textContent = "";

  const filteredList = array.filter(function (item) {
    const searchTextMatch = item.text
      .toLowerCase()
      .includes(filter.searchText.toLowerCase());
    const hideCompletedMatch = !filter.filterCompleted || !item.completed;

    // Return object if it matches the string search and the hide completed checkbox
    return searchTextMatch && hideCompletedMatch;
  });

  // Obtain total of unfinished todos
  const numNotCompleted = filteredList.filter((item) => !item.completed).length;

  // Render todo elements and append to div
  filteredList.forEach(function (todo) {
    const todoText = document.createElement("p");
    todoText.textContent = `${todo.text} - ${todo.completed}`;
    document.querySelector("#todos").appendChild(todoText);
  });

  document.querySelector(
    "#left-to-complete"
  ).textContent = `You have ${numNotCompleted} todos left to complete`;
};

// Eventlistners

// Search input
document.querySelector("#search-query").addEventListener("input", function (e) {
  // Set filters based on input
  filters.searchText = e.target.value;

  // Re-render list
  renderTodos(todos, filters);
});

// Save todo
document
  .querySelector("#create-todo-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.elements.todoText.value != "") {
      todos.push({
        text: e.target.elements.todoText.value,
        completed: false,
        dueDate: new Date(),
      });
      e.target.elements.todoText.value = "";
      renderTodos(todos, filters);
    } else {
      alert("Please enter text for the new todo");
    }
  });

// Completed check box
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.filterCompleted = e.target.checked;
    renderTodos(todos, filters);
  });

// Initialize page

renderTodos(todos, filters);
