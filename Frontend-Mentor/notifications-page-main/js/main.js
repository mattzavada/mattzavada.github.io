// Grab all section nodes with data attribute of true
const unreadMessages = document.querySelectorAll("section[data-unread='true']");

// Copy nodelist to array to track number of unread instead of searching the DOM each time to track how many notification are still unread
const arrayUnreadMessages = Array.from(unreadMessages);

// Add onclick events to all sections and mark all as read button

function addClickEvents() {
  unreadMessages.forEach((item) => {
    item.addEventListener("click", (event) => {
      markAsRead(item);
    });
  });
  document
    .getElementById("mark__all__read")
    .addEventListener("click", (event) => {
      markAllAsRead(unreadMessages);
    });
}

// Changes data-unread attribute on node, removes item from array and updates the total

function markAsRead(item) {
  if (item.getAttribute("data-unread") === "true") {
    item.setAttribute("data-unread", "false");
    arrayUnreadMessages.pop();
    updateUnreadTotal();
  }
}

// Loop through provided nodelist, marking each as read

function markAllAsRead(items) {
  items.forEach((item) => {
    markAsRead(item);
  });
}

// Updates unread count element

function updateUnreadTotal() {
  document.getElementById("unread__count").textContent =
    arrayUnreadMessages.length;
}

addClickEvents();

updateUnreadTotal();
