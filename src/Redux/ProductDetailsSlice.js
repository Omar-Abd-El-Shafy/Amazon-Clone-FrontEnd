import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  product: [],
  status: null,
};

///action creater
export const productDetails = createAsyncThunk(
  //action
  'prodacts/productDetails',
  //paylod
  async (id) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log('res');
      console.log(res);

      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productDetailsSlice = createSlice({
  name: 'prodacts',
  initialState,
  reducers: {},
  //handel action type
  extraReducers: {
    [productDetails.pending]: (state, action) => {
      state.status = 'pending';
    },
    [productDetails.fulfilled]: (state, action) => {
      state.status = 'sucess';
      state.product = action.payload;
    },
    [productDetails.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});
export default productDetailsSlice.reducer;
