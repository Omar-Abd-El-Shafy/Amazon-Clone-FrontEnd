import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    loggedInUser: null,
    error: "",
};
// Generates pending, fulfilled and rejected action types
// "https://amazon-clone-deploy.herokuapp.com/user/signup",

export const login = createAsyncThunk("user/login", async (userData) => {
    const response = await axios.post(
        "https://amazon-clone-deploy.herokuapp.com/user/login",
        userData
    );
    console.log(response.data);
    return response.data;
});
///////////////////////////////////////
// "https://amazon-clone-deploy.herokuapp.com/user/register",

export const register = createAsyncThunk("user/register", async (userData) => {
    const response = await axios.post(
        "https://amazon-clone-deploy.herokuapp.com/user/register",
        userData
    );
    return response.data;
});

// update user 
export const update = createAsyncThunk( 'user/update', async (  user ) =>
{
  console.log(user);
  // try {
  //       await axios.put(
  //       `https://amazon-clone-deploy.herokuapp.com/user/`,
  //       {user.name},
  //       {
  //         headers: {
  //           'x-access-token':user.token,
  //         },
  //        }
  //     ).then((res) => {
  //           console.log(res.data);
  //     console.log("update: "  );

  // } catch ( error ) { }
});



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state, action) {
            localStorage.removeItem("userData");
            state.loggedInUser = null;
        },
        setUser(state, action) {
            state.loggedInUser = action.payload;
        },
    },
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
        } );
        //////////////
           builder.addCase(update.pending, (state) => {
             state.loading = true;
           });
           builder.addCase(update.fulfilled, (state, action) => {
             state.loading = false;
             state.loggedInUser = action.payload;
             state.error = '';
           });
           builder.addCase(update.rejected, (state, action) => {
             state.loading = false;
             state.loggedInUser = null;
             state.error = action.error.message;
           });
    },
});

export const userSliceActions = { ...userSlice.actions, login, register };

export default userSlice.reducer;
// Nanousa24@