import { createSlice } from "@reduxjs/toolkit";

// export const accountsSlice = accountsSlice.actions;

export const accountsSlice = createSlice({
    name: "accounts",
    initialState: {
      token: "",
      status: "idle",
      error: null,
      accounts:
      [
        {
            accountType: "Checking",
            accountNumber: "1234567898349",
            accountAmount: 12345,
            accountTransactions: 
            [    
                {
                    date: "30/06/24",
                    description: "Golden Sun Bak 1",
                    amount: 8.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "29/06/24",
                    description: "Golden Sun Bak 2",
                    amount: 9.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "28/06/24",
                    description: "Golden Sun Bak 3",
                    amount: 10.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "27/06/24",
                    description: "Golden Sun Bak 4",
                    amount: 11.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "26/06/24",
                    description: "Golden Sun Bak 5",
                    amount: 12.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
            ]
        },

        {
            accountType: "Savings",
            accountNumber: "1234567896742",
            accountAmount: 23456,
            accountTransactions: 
            [    
                {
                    date: "30/06/24",
                    description: "Golden Sun Bak 1",
                    amount: 8.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "29/06/24",
                    description: "Golden Sun Bak 2",
                    amount: 9.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "28/06/24",
                    description: "Golden Sun Bak 3",
                    amount: 10.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "27/06/24",
                    description: "Golden Sun Bak 4",
                    amount: 11.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "26/06/24",
                    description: "Golden Sun Bak 5",
                    amount: 12.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
            ]
        },
        {
            accountType: "Credit Card",
            accountNumber: "1234567898349",
            accountAmount: 3456,
            accountTransactions: 
           [    
                {
                    date: "25/06/24",
                    description: "Silver Moon Pastry",
                    amount: 13.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "24/06/24",
                    description: "Silver Moon Pastry",
                    amount: 14.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                }, 
                {
                    date: "23/06/24",
                    description: "Silver Moon Pastry",
                    amount: 15.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "22/06/24",
                    description: "Silver Moon Pastry",
                    amount: 16.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
                {
                    date: "21/06/24",
                    description: "Silver Moon Pastry",
                    amount: 17.00,
                    details: 
                    {
                        transactionType: "Electronic",
                        category: "Food",
                        note: "Lorem"
                    }
                },
            ]
        },
      ],
    },
    reducers: {
      sessionTokenReset: (state) => {
        state.token = "";
        state.status = "idle";
      },
    },
  });
  
  // export const accountsSlice = accountsSlice.actions;

  
