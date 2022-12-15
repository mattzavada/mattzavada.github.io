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

const incompleteTodos = todos.filter(function (item) {
  return !item.completed;
});

const subHeading = document.createElement("h2");
subHeading.textContent = `You have ${incompleteTodos.length} todos left to complete`;

document.querySelector("h1").insertAdjacentElement("afterend", subHeading);

incompleteTodos.forEach(function (item) {
  const newTodo = document.createElement("p");
  newTodo.textContent = item.text;
  document.querySelector("body").appendChild(newTodo);
});
