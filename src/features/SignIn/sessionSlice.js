import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/api/v1/user/login";

export const fetchLogin = createAsyncThunk("user/fetchLogin", async (data) => {
  try {
    const response = await axios.post(POST_URL, data); // ATTENTION : axios methode post (1er Argument = URL, 2e Argument = data, 3e Argument = Objet dont headers)
    // console.log(response.data.body.token);
    return { token: response.data.body.token };
  } catch (error) {
    // console.log(error.message);
    throw error;
  }
});

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: "",
    status: "idle",
    error: null,
  },
  reducers: {
    sessionTokenReset: (state) => {
      state.token = "";
      state.status = "idle";
    },
  },
  extraReducers(
    builder // pour Asynchrone (createAsyncThunk)
  ) {
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.status = "success";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export const sessionTokenReset = sessionSlice.actions;
