import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
  totalProductsPrice: 0,
  totalCartPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const item = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(item);
      if (item >= 0) {
        state.cartItems[item].quantity+=1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

//  const item = state.cartItems.findIndex(
//    (item) => item.id === action.payload.id
//  );
//  console.log(item);
//  if (item >= 0) {
//    state.cartItems[item].quantity = +1;
//  } else {
//    const tempProduct = { ...action.payload, quantity: 1 };
//    state.cartItems.push(tempProduct);
//  }
