import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prodactsApi = createApi({
  reducerPath: 'prodactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' https://amazon-clone-deploy.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: () => 'product',
    }),
    getSingleProdact: builder.query({
      query: (_id) => `product/one/${_id}`,
    }),
    getAllCategories: builder.query({
      query: () => '/product/category',
    }),
    getdepartment: builder.query({
      query: () => `products/department`,
    }),
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  
} = prodactsApi;
