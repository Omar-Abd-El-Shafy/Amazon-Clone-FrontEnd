import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prodactsApi = createApi({
  reducerPath: 'prodactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazon-clone-deploy.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: () => 'product',
    }),
    getSingleProdact: builder.query({
      query: (id) => `product/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `category`,
    }),
    getProdactCategories: builder.query({
      query: (id) => `/products/category/${id}`,
    }),
    // getdepartment: builder.query({
    //   query: () => `department`,
    // }),
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery
} = prodactsApi;



