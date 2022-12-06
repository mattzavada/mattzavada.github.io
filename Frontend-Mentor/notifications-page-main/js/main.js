const unreadMessages = document.querySelectorAll("section[data-unread='true']");

const arrayUnreadMessages = Array.from(unreadMessages);

const markAllAsRead = document.getElementById("mark__all__read");

markAllAsRead.addEventListener("click", (event) => {
  unreadMessages.forEach((item) => {
    const isUnread = item.getAttribute("data-unread");
    if (isUnread === "true") {
      markAsRead(item);
    }
  });
});

function updateUnreadTotal() {
  document.getElementById("unread__count").textContent =
    arrayUnreadMessages.length;
}

function markAsRead(item) {
  item.setAttribute("data-unread", "false");
  arrayUnreadMessages.pop();
  updateUnreadTotal();
}

function addClickEvent() {
  unreadMessages.forEach((item) => {
    item.addEventListener("click", (event) => {
      const isUnread = item.getAttribute("data-unread");
      if (isUnread === "true") {
        markAsRead(item);
      }
    });
  });
}

addClickEvent();

updateUnreadTotal();
