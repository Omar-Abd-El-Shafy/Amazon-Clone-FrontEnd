import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const initialState = {
  status: null,
  products: [],
  cat: [],
  sort: {},
  filter: {},
};

//action creater
export const productFetch = createAsyncThunk(
  //action type
  'prodacts/productFetch',
  //paylod
  async (cat) => {
    await axios
      .get(
        cat
          ? `https://fakestoreapi.com/products/category/${cat}`
          : `https://fakestoreapi.com/products`
      )
      .then((res) => {
        console.log(res);
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(res);
  }
);

const ProductSlice = createSlice({
  name: 'prodacts',
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
