import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loggedInUser: null,
  error: "",
};
// Generates pending, fulfilled and rejected action types
export const login = createAsyncThunk("user/login", async (userData) => {
  const response = await axios.post(
    "http://localhost:3333/user/login",
    userData
  );
  return response.data;
});
///////////////////////////////////////
export const register = createAsyncThunk("user/register", async (userData) => {
  const response = await axios.post(
    "http://localhost:3333/user/register",
    userData
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.loggedInUser = null;
      state.error = action.error.message;
    });

    /////////////////////////////////////////
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
      state.error = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.loggedInUser = null;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
