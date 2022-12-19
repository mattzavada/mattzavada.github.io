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

const numNotCompleted = function (array) {
  return array.filter((item) => !item.completed).length;
};

//Render todos on screen
const renderTodos = function (array, filter) {
  // Clear current list of todos and sub-heading
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#left-to-complete").textContent = "";

  // Initialize filtered list
  let filteredList = array;

  // Filter array based on text filter
  if (filter.searchText != "") {
    filteredList = array.filter(function (item) {
      return item.text.toLowerCase().includes(filter.searchText.toLowerCase());
    });
  }

  // Filter array based on completed
  if (filter.filterCompleted) {
    filteredList = filteredList.filter(function (item) {
      return !item.completed;
    });
  }

  // Render todo elements and append to div
  filteredList.forEach(function (todo) {
    const todoText = document.createElement("p");
    todoText.textContent = `${todo.text} - ${todo.completed}`;
    document.querySelector("#todos").appendChild(todoText);
  });

  document.querySelector(
    "#left-to-complete"
  ).textContent = `You have ${numNotCompleted(todos)} todos left to complete`;
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
  .addEventListener("click", function (e) {
    if (e.target.checked) {
      filters.filterCompleted = true;
      renderTodos(todos, filters);
    } else {
      filters.filterCompleted = false;
      renderTodos(todos, filters);
    }
  });

// Initialize page

renderTodos(todos, filters);
