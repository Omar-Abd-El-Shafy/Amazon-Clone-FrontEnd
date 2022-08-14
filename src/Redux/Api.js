import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazon-clone-deploy.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: (page = 1) => `product?page=${page}`,
    }),
    getSingleProdact: builder.query({
      query: (id) => `product/one/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `category`,
    }),
    getProdactCategories: builder.query({
      query: (id, page = 1) => {
        console.log('category' + id);
        return {
          method: 'GET',
          url: `/product/search?page=${page}&category=${id}`,
        };
      },
    }),
    getdAlldepartment: builder.query({
      query: () => `department`,
    }),
    getCategorydepartment: builder.query({
      query: (id) => `category/dept/${id}`,
    }),
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery,
  useGetdAlldepartmentQuery,
  useGetCategorydepartmentQuery,
} = Api;
