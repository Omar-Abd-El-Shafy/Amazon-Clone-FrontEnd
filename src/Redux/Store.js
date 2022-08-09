import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
// import ProductsReducer, { productFetch } from './ProductSlice.js';
import { prodactsApi } from "./prodactsApi";
import { api } from "./services";

import userReducer from "./userSlice";
import CategoryReducer, { CategoryFetch } from "./CategorySlice";
const store = configureStore({
  reducer: {
    // prodacts: ProductsReducer,
    cart: cartReducer,
    Category: CategoryReducer,
    user: userReducer,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([prodactsApi.middleware, api.middleware]),
});
// store.dispatch(productFetch());
store.dispatch(getTotal());
store.dispatch(CategoryFetch());
export default store;
