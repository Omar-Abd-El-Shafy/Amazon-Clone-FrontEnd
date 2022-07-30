import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotal } from './cartSlice';
import ProductsReducer, { productFetch } from './ProductSlice.js';
import { prodactsApi } from './prodactsApi';
import reducers from '../store/reducers/combineReducer';
import CategoryReducer, { CategoryFetch } from './CategorySlice';
const store = configureStore({
  reducer: {
    prodacts: ProductsReducer,
    cart: cartReducer,
    Category: CategoryReducer,
    reducers,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodactsApi.middleware),
});
store.dispatch(productFetch());
store.dispatch(getTotal());
store.dispatch(CategoryFetch());
export default store;
