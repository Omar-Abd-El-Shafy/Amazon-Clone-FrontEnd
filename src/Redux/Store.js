import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
import { prodactsApi } from "./prodactsApi";
import userReducer from "./userSlice";
import shippingReducer from "./shippingSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    shipping: shippingReducer,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([prodactsApi.middleware]),
});
store.dispatch(getTotal());
export default store;
