import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prodactsApi = createApi({
  reducerPath: 'prodactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: () => 'products',
    }),
    getSingleProdact: builder.query({
      query: (id) => `products/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `products/categories`,
    }),
    getProdactCategories: builder.query({
      query: (id) => `products/category/${id}`,
    }),
    getdepartment: builder.query({
      query: (_id) => `product/department`,
    }),
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery
} = prodactsApi;



