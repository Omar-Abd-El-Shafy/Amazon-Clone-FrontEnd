import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Category: [],
  status: null,
};
//fetch data
export const CategoryFetch = createAsyncThunk(
  //action type
  'Category/categoryFetch',
  //paylod
  async () => {
    await axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        return res?.data;
      }).catch((err)=>{console.log(err)})
    // console.log(res);
  }
);

const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers: {
    [CategoryFetch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [CategoryFetch.fulfilled]: (state, action) => {
      state.status = 'sucess';
      state.product = action.payload;
    },
    [CategoryFetch.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export default categorySlice.reducer;
