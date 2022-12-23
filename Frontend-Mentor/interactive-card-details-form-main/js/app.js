const formCardHolder = document.querySelector("#formCardHolder");
const formCardNumber = document.querySelector("#formCardNumber");
const formCardMonth = document.querySelector("#formCardMonth");
const formCardYear = document.querySelector("#formCardYear");
const formCardCVC = document.querySelector("#formCardCVC");
const cardName = document.querySelector(".cardName");
const cardNumber = document.querySelector(".cardNumber");
const cardMonth = document.querySelector(".cardExpMonth");
const cardYear = document.querySelector(".cardExpYear");
const cardCVC = document.querySelector(".cardCVC");
const errorCardName = document.querySelector("#errorCardName");
const errorCardNumber = document.querySelector("#errorCardNumber");
const errorCardMonth = document.querySelector("#errorCardMonth");
const errorCardYear = document.querySelector("#errorCardYear");
const errorCardCVC = document.querySelector("#errorCardCVC");

//Name

formCardHolder.addEventListener("input", function (e) {
  cardName.textContent = e.target.value;
  if (e.target.value === "") {
    cardName.textContent = "Jane Appleseed";
  }
});

formCardHolder.addEventListener("change", function (e) {
  validateName();
});

function validateName() {
  if (formCardHolder.value === "") {
    errorCardName.textContent = "Please provide full name";
    formCardHolder.classList.add("inputError");
    return false;
  } else {
    errorCardName.textContent = "";
    formCardHolder.classList.remove("inputError");
    return true;
  }
}

//Number

formCardNumber.addEventListener("input", function (e) {
  //Add space after every four characters
  cardNumber.textContent = e.target.value.replace(/.{4}/g, "$& ");

  if (e.target.value === "") {
    cardNumber.textContent = "0000 0000 0000 0000";
  }
});

formCardNumber.addEventListener("change", function (e) {
  validateNumber();
});

function validateNumber() {
  if (formCardNumber.value === "") {
    errorCardNumber.textContent = "Card number cannot be blank";
  } else if (
    !/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      formCardNumber.value
    )
  ) {
    errorCardNumber.textContent = "Wrong format. Provide a valid number";
    formCardNumber.classList.add("inputError");
    return false;
  } else if (formCardNumber.value.length < 16) {
    errorCardNumber.textContent = "Please provide 16 digits";
    formCardNumber.classList.add("inputError");
    return false;
  } else {
    errorCardNumber.textContent = "";
    formCardNumber.classList.remove("inputError");
    return true;
  }
}

// Month

formCardMonth.addEventListener("input", function (e) {
  cardMonth.textContent = e.target.value;

  if (e.target.value === "") {
    cardMonth.textContent = "00";
  }
});

formCardMonth.addEventListener("change", function (e) {
  if (
    formCardMonth.value > 0 &&
    formCardMonth.value < 10 &&
    formCardMonth.value.length < 2
  ) {
    cardMonth.textContent = "0" + formCardMonth.value;
    formCardMonth.value = cardMonth.textContent;
  }
  validateMonth();
});

function validateMonth() {
  if (!/^((0[1-9])|(1[0-2]))$/.test(formCardMonth.value)) {
    errorCardMonth.textContent = "Valid month options are 01-12";
    formCardMonth.classList.add("inputError");
    return false;
  } else {
    errorCardMonth.textContent = "";
    formCardMonth.classList.remove("inputError");
    return true;
  }
}

//Year

formCardYear.addEventListener("input", function (e) {
  cardYear.textContent = e.target.value;
  if (e.target.value === "") {
    cardYear.textContent = "00";
  }
});

formCardYear.addEventListener("change", function (e) {
  validateYear();
});

function validateYear() {
  let date = new Date();
  const currentDate = date.getFullYear().toString().slice(-2);
  date.setFullYear(date.getFullYear() + 8);
  const lastDate = date.getFullYear().toString().slice(-2);

  if (formCardYear.value < currentDate || formCardYear.value > lastDate) {
    errorCardYear.textContent = `Valid year options are ${currentDate}-${lastDate}`;
    formCardYear.classList.add("inputError");
    return false;
  } else {
    errorCardYear.textContent = "";
    formCardYear.classList.remove("inputError");
    return true;
  }
}

// CVC

formCardCVC.addEventListener("input", function (e) {
  cardCVC.textContent = e.target.value;
  if (e.target.value === "") {
    cardCVC.textContent = "000";
  }
});

formCardCVC.addEventListener("change", function (e) {
  validateCVC();
});

function validateCVC() {
  if (!/\d{3}/.test(formCardCVC.value)) {
    errorCardCVC.textContent = "Enter a valid three digit number";
    formCardCVC.classList.add("inputError");
    return false;
  } else {
    errorCardCVC.textContent = "";
    formCardCVC.classList.remove("inputError");
    return true;
  }
}

document
  .querySelector("#formCardDetails")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      validateName() &&
      validateNumber() &&
      validateMonth() &&
      validateYear() &&
      validateCVC()
    ) {
      document.querySelector(".layoutForm").innerHTML =
        "<div id='confirmation'><img src='images/icon-complete.svg' atl='Success' id='imageCheck'><h2 class='thankyou'>Thank you!</h2><p class='message'>We've added your card details</><form id='formConfirmation'><button id='confirm' type='submit' class='buttonConfirm'>Continue</button></form></div>";
    }
  });
