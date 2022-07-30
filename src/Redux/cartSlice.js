import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
      totalProductsPrice: 0,
      totalCartPrice: 0,
    
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.totalProductsPrice += action.payload.price;
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
