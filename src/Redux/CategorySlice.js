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
    const res = await axios.get('https://fakestoreapi.com/products/categories');
    // console.log(res);

    return res?.data;
  }
);

const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
