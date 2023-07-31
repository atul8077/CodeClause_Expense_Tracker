// Expense array to store the list of expenses
let expenses = [];

// Function to display expenses on the page
function displayExpenses() {
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `
      <span>${expense.description}</span>
      <span>$${expense.amount}</span>
      <button onclick="removeExpense(${index})">Remove</button>
    `;
    expenseList.appendChild(expenseItem);
  });
}

// Function to add a new expense
function addExpense(event) {
  event.preventDefault();

  const descriptionInput = document.getElementById("expense-text");
  const amountInput = document.getElementById("expense-amount");

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const newExpense = {
    description,
    amount
  };

  expenses.push(newExpense);
  displayExpenses();

  descriptionInput.value = "";
  amountInput.value = "";
}

// Function to remove an expense
function removeExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}

// Event listener for form submission
const expenseForm = document.getElementById("expense-form");
expenseForm.addEventListener("submit", addExpense);

// Initial display of expenses
displayExpenses();
