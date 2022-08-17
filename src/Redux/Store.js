import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
import { Api } from './Api';
import userReducer from "./userSlice";
import shippingReducer from "./shippingSlice";
import paymentReducer from './paymentSlice';
import favouriteReducer from './favouriteSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    shipping: shippingReducer,
    payment: paymentReducer,
    favourite: favouriteReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([Api.middleware]),
});
store.dispatch(getTotal());
export default store;
