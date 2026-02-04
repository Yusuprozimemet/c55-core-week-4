const chalk = require('chalk');
const data = require('./data');
const transactions = data.transactions;

const {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions
} = require('./finance');

// Example usage of the functions
console.log(chalk.blue('💰 PERSONAL FINANCE TRACKER 💰'));

printAllTransactions(transactions);

console.log('\n📊 FINANCIAL SUMMARY 📊');
console.log(chalk.bold('Total Income:') + chalk.green(` €${getTotalIncome(transactions)}`));
console.log(chalk.bold('Total Expenses:') + chalk.red(` €${getTotalExpenses(transactions)}`));
console.log(chalk.bold('Current Balance:') + (getBalance(transactions) < 0 ? chalk.red : chalk.cyan)(` €${getBalance(transactions)}`));

const largest = getLargestExpense(transactions);
if (largest) {
    console.log(chalk.bold(`\nLargest Expense: ${largest.category} (€${largest.amount})`));
}


console.log(chalk.bold(`Total Transactions: ${transactions.length}`));

addTransaction({
    id: 6,
    type: 'expense',
    category: 'entertainment',
    amount: 200,
    description: 'Concert tickets',
    date: '2025-02-05'
});
