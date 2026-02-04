// Place here the transaction data array. Use it in your application as needed.
const transactions = [
    {id: 1,
        type: 'income',
        category: 'Salary',
        amount: 3000,
        description: 'salary',
        date: '2025-01-15'
    },
    {id: 2,
        type: 'expense',
        category: 'Rent',
        amount: 1200,
        description: 'housing',
        date: '2025-01-25'
    },
    {id: 3,
        type: 'expense',
        category: 'Groceries',
        amount: 300,
        description: 'food',
        date: '2025-01-20'
    },
    
    {id: 4,
        type: 'income',
        category: 'Freelance',
        amount: 500,
        description: 'side-income',
        date: '2025-01-28'
    },
    {id: 5,
        type: 'expense',
        category: 'Utilities',
        amount: 150,
        description: 'bills',
        date: '2025-01-30'
    }
];

module.exports = {
    transactions
};