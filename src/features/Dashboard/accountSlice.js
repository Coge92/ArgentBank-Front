import { createSlice } from "@reduxjs/toolkit";

// export const accountsSlice = accountsSlice.actions;

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    token: "",
    status: "idle",
    error: null,
    accounts: [
      {
        accountType: "Checking",
        accountNumber: 1234567898349,
        accountAmount: 12345,
        accountTransactions: [
          {
            date: "30/06/24",
            description: "Golden Sun Bak 1",
            amount: 8.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "29/06/24",
            description: "Golden Sun Bak 2",
            amount: 9.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "28/06/24",
            description: "Golden Sun Bak 3",
            amount: 10.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "27/06/24",
            description: "Golden Sun Bak 4",
            amount: 11.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "26/06/24",
            description: "Golden Sun Bak 5",
            amount: 12.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
        ],
      },

      {
        accountType: "Savings",
        accountNumber: 1234567896742,
        accountAmount: 23456,
        accountTransactions: [
          {
            date: "30/06/24",
            description: "Golden Sun Bak 1",
            amount: 8.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "29/06/24",
            description: "Golden Sun Bak 2",
            amount: 9.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "28/06/24",
            description: "Golden Sun Bak 3",
            amount: 10.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "27/06/24",
            description: "Golden Sun Bak 4",
            amount: 11.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "26/06/24",
            description: "Golden Sun Bak 5",
            amount: 12.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
        ],
      },
      {
        accountType: "Credit Card",
        accountNumber: 9876543218349,
        accountAmount: 3456,
        accountTransactions: [
          {
            date: "25/06/24",
            description: "Silver Moon Pastry",
            amount: 13.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "24/06/24",
            description: "Silver Moon Pastry",
            amount: 14.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "23/06/24",
            description: "Silver Moon Pastry",
            amount: 15.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "22/06/24",
            description: "Silver Moon Pastry",
            amount: 16.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
          {
            date: "21/06/24",
            description: "Silver Moon Pastry",
            amount: 17.0,
            details: {
              transactionType: "Electronic",
              category: "Food",
              note: "Lorem",
            },
          },
        ],
      },
    ],
    transactionExpenseCategory: [
      "Housing",
      "Food",
      "Transportation",
      "Heathcare",
      "Entertainment and Recreation",
      "Personal Expenses",
    ],
  },
  reducers: {
    modifyExpenseCategory: (state, action) => {
      const {
        accountNumber,
        transactionDate,
        transactionAmount,
        transactionDescription,
        category
      } = action.payload;

      const accounts = state.accounts;

      const expenseAccount = accounts.find(
        (account) => account.accountNumber === accountNumber
      );

      const expenseAccountTransactions = expenseAccount.accountTransactions;

      const expenseAccountTransaction = expenseAccountTransactions.find(
        (transaction) =>
          transaction.date === transactionDate &&
          transaction.description === transactionDescription &&
          transaction.amount === transactionAmount
      );

      expenseAccountTransaction.details = {
        ...expenseAccountTransaction.details,
        category: category,
      };
    },
    modifyExpenseNote: (state, action) => {
        const {
            accountNumber,
            transactionDate,
            transactionAmount,
            transactionDescription,
            notes,
          } = action.payload;

        const accounts = state.accounts;

        const expenseAccount = accounts.find(
        (account) => account.accountNumber === accountNumber
        );

        const expenseAccountTransactions = expenseAccount.accountTransactions;

        const expenseAccountTransaction = expenseAccountTransactions.find(
            (transaction) =>
              transaction.date === transactionDate &&
              transaction.description === transactionDescription &&
              transaction.amount === transactionAmount
          );

          expenseAccountTransaction.details = {
            ...expenseAccountTransaction.details,
            note: notes,
          };
    }
  },
});

export const { modifyExpenseCategory , modifyExpenseNote } = accountsSlice.actions;

