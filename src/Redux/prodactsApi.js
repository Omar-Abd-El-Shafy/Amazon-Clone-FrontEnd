import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prodactsApi = createApi({
  reducerPath: 'prodactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: ( builder ) => ({
      getAllProdacts: builder.query({
        query: () => "products",
      } ),
      getSingleProdact: builder.query({
        query: (id) => `products/${id}`,
      } ),
     
    }),
});
export const { useGetAllProdactsQuery,useGetSingleProdactQuery } = prodactsApi;
