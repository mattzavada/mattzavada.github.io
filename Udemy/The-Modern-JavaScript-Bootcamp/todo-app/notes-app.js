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
  filterCompleted: false,
};

// Clear completed todos
const incompleteTodos = todos.filter(function (item) {
  return !item.completed;
});

//Render todo on screen
const renderTodos = function (array, filter) {
  // Clear current list of todos
  document.querySelector("#todos").innerHTML = "";

  // Filter array based on filter
  const filteredListText = array.filter(function (item) {
    return item.text.toLowerCase().includes(filter.searchText.toLowerCase());
  });

  // const filteredListStatus = filteredListText.filter(function (item) {
  //   return item.completed;
  // });

  // Create toto elements and append to div
  filteredListText.forEach(function (todo) {
    const todoText = document.createElement("p");
    todoText.textContent = `${todo.text} - ${todo.completed}`;
    document.querySelector("#todos").appendChild(todoText);
  });
};

// Eventlistners
document.querySelector("#search-query").addEventListener("input", function (e) {
  // Set filters based on input
  filters.searchText = e.target.value;

  // Re-render list
  renderTodos(todos, filters);
});

document.querySelector("#add-todo").addEventListener("click", function (e) {
  console.log("Did this work?");
});

document
  .querySelector("#clear-completed")
  .addEventListener("click", function (e) {
    if (e.target.checked) {
      console.log("checked");
    }
  });

// Initialize page

renderTodos(todos, filters);

const subHeading = document.createElement("h2");
subHeading.textContent = `You have ${incompleteTodos.length} todos left to complete`;
document.querySelector("h1").insertAdjacentElement("afterend", subHeading);
