import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazon-clone-deploy.herokuapp.com/',
  }),

  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: () => `product`,
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
          method: 'GET',
          // product?page=1&category=22
          // /product/search?category=122
          url: `/product?category=${id}`,
        };
      },
    }),
    getdAlldepartment: builder.query({
      query: () => `department`,
    }),
    getCategorydepartment: builder.query({
      query: (id) => `category/dept/${id}`,
    }),
    addProduct: builder.mutation({
      query: ({token, body}) => ({
        url: `product`,
        method: 'POST',
        headers: {
          'x-access-token': `${token}`
        },
        body
      })
    })
  }),
});
export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery,
  useGetdAlldepartmentQuery,
  useGetCategorydepartmentQuery,
  useAddProductMutation
} = Api;
