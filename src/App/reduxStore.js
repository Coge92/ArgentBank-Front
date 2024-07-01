import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "../features/SignIn/sessionSlice";
import { userSlice } from "../features/Dashboard/userSlice";
import { accountsSlice } from "../features/Dashboard/accountSlice";


export const store = configureStore({

    reducer: {
        session: sessionSlice.reducer,
        user: userSlice.reducer,
        accounts: accountsSlice.reducer
    }
})