import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
import { prodactsApi } from "./prodactsApi";
import { api } from "./services";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([prodactsApi.middleware, api.middleware]),
});
store.dispatch(getTotal());
export default store;
