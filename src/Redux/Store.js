import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
import { Api } from './Api';
import userReducer from "./userSlice";
import shippingReducer from "./shippingSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    shipping: shippingReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([Api.middleware]),
});
store.dispatch(getTotal());
export default store;
