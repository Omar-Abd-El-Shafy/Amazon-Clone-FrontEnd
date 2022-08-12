import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: [],
  status: null,
};

//action creater
export const productFetch = createAsyncThunk(
  //action
  'prodacts/productFetch',
  //paylod
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
  console.log('res');
        console.log(res);
    return res?.data;
  }
);


const ProductSlice = createSlice({
  name: 'prodacts',
  initialState,
  reducers: {},
  //handel action type

});

export default ProductSlice.reducer;
