const todos = [
  {
    text: "Take shower",
    completed: true,
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

const sortByText = function (array) {
  array.sort(function (a, b) {
    if (a.text.toLowerCase() < b.text.toLowerCase()) {
      return -1;
    } else if (b.text.toLowerCase() < a.text.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortByDate = function (array) {
  sortByText(array);
  array.sort(function (a, b) {
    if (a.dueDate < b.dueDate) {
      return -1;
    } else if (b.dueDate < a.dueDate) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortByStatus = function (array) {
  sortByText(array);
  array.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

// removeTodo(todos, "clean Car");
// console.log(todos);
// sortByDate(todos);
// console.log(todos);
sortByStatus(todos);
console.log(todos);

// console.log(getThingsTodo(todos));

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
