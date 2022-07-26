import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import ProductsReducer, { productFetch } from './ProductSlice.jsx';
import { prodactsApi } from './prodactsApi';
import reducers from '../store/reducers/combineReducer'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    prodacts: ProductsReducer,
    reducers,
    [prodactsApi.reducerPath]: prodactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodactsApi.middleware),
});
store.dispatch(productFetch());
export default store;
