import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        email: "mail@mail.com",
        password: "mdp",
        firstName: "Mehdi",
        lastName: "Habs",
        userName: "Coge"
    },
    reducers:
    {
        
    }

})

export const store = configureStore({

    reducer: {
        user: userSlice.reducer,
    }
})