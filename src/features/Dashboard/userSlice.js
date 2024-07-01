import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/api/v1/user/profile";
export const fetchDataUser = createAsyncThunk(
  "user/fetchDataUser",
  async (token) => {
    const bearerToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(POST_URL, {}, bearerToken); // ATTENTION : axios methode post (1er Argument = URL, 2e Argument = data, 3e Argument = Objet dont headers)
      return response.data.body;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

const PUT_URL = "http://localhost:3001/api/v1/user/profile";

export const fetchNewUserName = createAsyncThunk(
  "user/userNameUpdate",
  async ({ fetchedUserName, token }) => {
    // ATTENTION : createAsyncThunk n'accepte qu'un seul argument dont faire objet et destructurer
    const bearerToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(PUT_URL, fetchedUserName, bearerToken); // ATTENTION : axios methode post (1er Argument = URL, 2e Argument = data, 3e Argument = Objet dont headers)
      return response.data.body;
    } catch (error) {
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    statusDataUser: "idle",
    errorDataUser: null,
    statusNewUserName: "idle",
    errorNewUserName: null,
  },
  reducers: {}, // Synchrone
  extraReducers(builder) {
    // pour Asynchrone (createAsyncThunk)

    //  Cases pour récuperer les données de l'utilisateur
    builder.addCase(fetchDataUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.statusDataUser = "success";
    });
    builder.addCase(fetchDataUser.rejected, (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.id = "";
      state.userName = "";
      state.statusDataUser = "failed";
    });

    //  Cases pour mettre à jour le userName
    builder.addCase(fetchNewUserName.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.statusNewUserName = "success";
    });
    builder.addCase(fetchNewUserName.rejected, (state) => {
      state.statusNewUserName = "failed";
    });

  },
});

// export const { userNameUpdate } = userSlice.actions;

// userNameUpdate: (state, action) => {
//     state.userName = action.payload
// }
