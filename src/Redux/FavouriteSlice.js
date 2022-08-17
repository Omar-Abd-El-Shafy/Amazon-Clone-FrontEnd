import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  favouriteItems: localStorage.getItem('favouriteItems')
    ? JSON.parse(localStorage.getItem('favouriteItems'))
    : [],
};

const cartSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addTfavourite(state, action) {
      const itamindex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itamindex >= 0) {
        state.favouriteItems = action.payload.favourite;
        toast.info(
          `  ${state.favouriteItems[itamindex].name} addTfavourite`,
          {}
        );
      }
    },
    removeFromCart(state, action) {
      const elemints = state.favouriteItems.filter(
        (fav) => fav._id !== action.payload._id
      );
      console.log(elemints);
      state.favouriteItems = elemints;
      localStorage.setItem(
        'favouriteItems',
        JSON.stringify(state.favouriteItems)
      );
      toast.error(`${action.payload.name} removed from favourite`, {});
    },
  },
});
