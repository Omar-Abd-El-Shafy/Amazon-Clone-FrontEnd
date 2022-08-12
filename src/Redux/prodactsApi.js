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
      query: (id) => `product/one/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `category`,
    }),
    getProdactCategories: builder.query({
      query: (id) => {
        console.log('category' + id);
        return {
          url: `product?category=${id}`,
          method: 'GET',
        };
      },
    }),
    getdAlldepartment: builder.query({
      query: () => `department`,
    }),
    getSingledepartment: builder.query({
      query: (id) => `department/${id}`,
    }),
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery,
  useGetdAlldepartmentQuery,
  useGetSingledepartmentQuery,
} = prodactsApi;
