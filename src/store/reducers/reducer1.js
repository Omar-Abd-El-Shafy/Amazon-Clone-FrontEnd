import { LOGIN } from "../actions/login";
import { REGISTER } from "../actions/register";

// import { createSlice,configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   loggedInUser: null,
// };

// const loggedInUserSlice= createSlice({
//   name: "loggedInUser",
//   initialState,
//   reducers: {
//     register(state, action) {
//       state.loggedInUser = action.payload;
//     },
//     login(state, action) {
//       state.loggedInUser = action.payload;
//     },
//     logout(state) {
//       state.loggedInUser = null;
//     },
//   },
// });

// const store=configureStore({reducer:loggedInUserSlice.reducer});

// export const loggedInUserActions=loggedInUserSlice.actions;
// export default store;

const INITIAL_VALUE = {
  loggedInUser: null,
};

export default function authentication(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedInUser: null,
      };

    default:
      return state;
  }
}
