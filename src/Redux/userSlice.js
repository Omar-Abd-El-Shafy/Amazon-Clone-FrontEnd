import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import token from "../Components/user/UpdateName";
const initialState = {
  loading: false,
  loggedInUser: null,
  error: '',
};
// Generates pending, fulfilled and rejected action types
// "https://amazon-clone-deploy.herokuapp.com/user/signup",

export const login = createAsyncThunk('user/login', async (userData) => {
  const response = await axios.post(
    'https://amazon-clone-deploy.herokuapp.com/user/login',
    userData
  );
  console.log(response.data);
  return response.data;
});
///////////////////////////////////////
// "https://amazon-clone-deploy.herokuapp.com/user/register",

export const register = createAsyncThunk('user/register', async (userData) => {
  const response = await axios.post(
    'https://amazon-clone-deploy.herokuapp.com/user/register',
    userData
  );
  return response.data;
});

// update user
export const updateUser = createAsyncThunk('user', async (userData) => {
  const bodyParameters = {
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
  };
  // const storedData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const response = await axios.put(
    'https://amazon-clone-deploy.herokuapp.com/user',

    bodyParameters,

    {
      headers: {
        // "Content-Type": "application/json",
        'x-access-token': `${userData.token}`,
      },
    }
  );

  return response.data;
});

//update password
export const updateUserPassword = createAsyncThunk('user', async (userData) => {
  // const storedData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const response = await axios.put(
    'https://amazon-clone-deploy.herokuapp.com/user/password',

    { password: userData.password },
    {
      headers: {
        // "Content-Type": "application/json",
        'x-access-token': `${userData.token}`,
      },
    }
  );

  return response.data;
});

//////////
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem('userData');
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
      state.error = '';
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
      state.error = '';
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.loggedInUser = null;
      state.error = action.error.message;
    });
    //////////////
  

    
  },
});

export const userSliceActions = {
  ...userSlice.actions,
  login,
  register,
  updateUser,
  updateUserPassword,
};

export default userSlice.reducer;
// Nanousa24@
