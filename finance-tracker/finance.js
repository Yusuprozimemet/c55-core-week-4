const chalk = require('chalk');
let transactions = [];


function filterByType(transactions, type) {
  return transactions.filter(tx => tx.type === type);
}
 
function filterByCategory(transactions, category) {
  return transactions.filter(tx => tx.category === category);
}


function calculateTotal(transactions) {
  return transactions.reduce((total, tx) => total + tx.amount, 0);
}

function addTransaction(transaction) {
  transactions.push({ ...transaction });
}

function getTotalIncome(transactions) {
  return calculateTotal(filterByType(transactions, 'income'));
}

function getTotalExpenses(transactions) {
  return calculateTotal(filterByType(transactions, 'expense'));
}

function getBalance(transactions) {
  return getTotalIncome(transactions) - getTotalExpenses(transactions);
}

function getTransactionsByCategory(category, transactions) {
  return filterByCategory(transactions, category);
}

function getLargestExpense(transactions) {
  const expenses = filterByType(transactions, 'expense');
  return expenses.length > 0 
    ? expenses.reduce((largest, tx) => tx.amount > largest.amount ? tx : largest)
    : null;
}

function printAllTransactions(transactions) {
  console.log('\nAll Transactions:');
  
  transactions.forEach((tx, index) => {
    const { type, category, amount, description } = tx;
    const typeLabel = type === 'income' ? chalk.green('Income') : chalk.red('Expense');
    const coloredAmount = type === 'income' ? chalk.green(`€${amount}`) : chalk.red(`€${amount}`);
    const coloredCategory = chalk.yellow(category);
    
    console.log(`${index + 1}. [${typeLabel}] ${coloredCategory} - ${coloredAmount} (${description})`);
  });
}

module.exports = {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions
};
