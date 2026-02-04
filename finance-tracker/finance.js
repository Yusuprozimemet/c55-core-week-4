const chalk = require('chalk');

let transactions = [];  

function addTransaction(singleTransaction) {
  const newTransaction = { ...singleTransaction };
  transactions.push(newTransaction);
}

function getTotalIncome(transactions) {
  let total = 0;
  for (const singleTransaction of transactions) {
    if(singleTransaction.type === 'income') {
      total += singleTransaction.amount;
    }
  }
  return total;
}

function getTotalExpenses(transactions) {
  let total = 0;
  for (const singleTransaction of transactions) {
    if(singleTransaction.type === 'expense') {
      total += singleTransaction.amount;
    }
  }
  return total;
}

function getBalance(transactions) {
  const income = getTotalIncome(transactions);
  const expenses = getTotalExpenses(transactions);
  return income - expenses;
}

function getTransactionsByCategory(category, transactions) {
  const results = [];
  for (const singleTransaction of transactions) {
    if(singleTransaction.category === category) {
      results.push(singleTransaction);
    }
  }
  return results;
}

function getLargestExpense(transactions) {
  let largest = null;
  for (const singleTransaction of transactions) {
    if(singleTransaction.type === 'expense') {
      if(largest === null || singleTransaction.amount > largest.amount) {
        largest = singleTransaction;
      }
    }
  }
  return largest;
}

function printAllTransactions(transactions) {
  console.log('\nAll Transactions:');
  let index = 1;
  for (const singleTransaction of transactions) {
    const {id, type, category, amount, description} = singleTransaction;
    const typeLabel = type === 'income' ? chalk.green('Income') : chalk.red('Expense');
    const coloredAmount = type === 'income' ? chalk.green(`${amount}`) : chalk.red(`${amount}`);
    const coloredCategory = chalk.yellow(`${category}`);
    console.log(`${index}. [${typeLabel}] ${coloredCategory} - ${coloredAmount} (${description})`);
    index++;
  }
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
