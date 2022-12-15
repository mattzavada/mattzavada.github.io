const todos = [
  {
    text: "Clean car",
    completed: true,
  },
  {
    text: "Study for meeting",
    completed: false,
  },
  {
    text: "Walk dog",
    completed: true,
  },
  {
    text: "Eat dinner",
    completed: false,
  },
  {
    text: "Take shower",
    completed: true,
  },
];

const removeTodo = function (todos, todoText) {
  let index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    console.log(`Removing item #${index + 1} entitled ${todos[index].text}`);
    todos.splice(index, 1);
  } else {
    console.log(`Item with title "${todoText}" was not found`);
  }
};

const getThingsTodo = function (array) {
  return array.filter(function (item) {
    return item.completed === false;
  });
};

// removeTodo(todos, "clean Car");
console.log(todos);
console.log(getThingsTodo(todos));

// todo.splice(2, 1);
// todo.push("Exercise");
// todo.shift();

// console.log(`You have ${todo.length - 1} items to do`);
// todo.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

// for (let count = 0; count < todo.length; count++) {
//   console.log(`${count + 1}. ${todo[count]}`);
// }
