const expenses = [
  {Expense: "groceries", Amount : 150},
  {Expense: "utilities", Amount : 80},
  {Expense: "dinning out", Amount : 120},
  {Expense: "transportation", Amount : 50}

 
]

const expenseListContainer = document.querySelector("#expenseList")
const totalExpenseContainer = document.querySelector("#totalExpense")

const expenseList = expenses.reduce((acc,curr) => {
  acc.totalAmount = acc.totalAmount + curr.Expense

  const listItem = document.createElement('li')
  listItem.textContent = `
  ${curr.Expense} - Amount : $${curr.Amount}`
  expenseListContainer.appendChild(listItem)

  return acc;

},{totalAmount: 0})



totalExpenseContainer.textContent = `totalAmount : $${itemList.totalAmount}`