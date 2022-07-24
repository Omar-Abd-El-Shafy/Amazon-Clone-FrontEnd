import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import ProductsReducer, { productFetch } from './ProductSlice.jsx';
import { prodactsApi } from './prodactsApi';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    prodacts: ProductsReducer,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodactsApi.middleware),
});
store.dispatch(productFetch());
export default store;
