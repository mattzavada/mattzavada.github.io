let account = {
  name: "Zavada",
  expenses: 0,
  income: 0,
};

let addIncome = function (account, amount) {
  account.income += amount;
};

let addExpense = function (account, amount) {
  account.expenses += amount;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getBalance = function (account) {
  return account.income - account.expenses;
};

let getSummary = function (account) {
  return `Account for ${account.name} has $${getBalance(account)}. $${
    account.income
  } in income. $${account.expenses} in expenses}`;
};

addIncome(account, 1000);
addExpense(account, 300);
addExpense(account, 250);
console.log(getSummary(account));
resetAccount(account);
console.log(getSummary(account));
