const account = {
  name: "Matthew Zavada",
  expenses: [],
  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount;
    });

    this.income.forEach(function (income) {
      totalIncome += income.amount;
    });

    return `${this.name} has a balance of $${
      totalIncome - totalExpenses
    }. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addExpense("Coke", 2);
account.addExpense("Hotdog", 2.5);
account.addIncome("Job", 100);
account.addIncome("Ebay", 5);

console.log(account.getAccountSummary());
