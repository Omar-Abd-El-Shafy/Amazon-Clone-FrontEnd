import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://amazon-clone-deploy.herokuapp.com/",
  }),
  tagTypes: ["Product", "Department", "Category"],

  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: () => `product`,
      providesTags: ["Product"],
    }),
    getSingleProdact: builder.query({
      query: (id) => `product/one/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `category`,
      providesTags: ["Category"],
    }),
    getProdactCategories: builder.query({
      query: (id) => {
        console.log("category" + id);
        return {
          method: "GET",
          // product?page=1&category=22
          // /product/search?category=122
          url: `/product?category=${id}`,
        };
      },
      providesTags: ["Product"],
    }),
    getdAlldepartment: builder.query({
      query: () => `department`,
    }),
    getCategorydepartment: builder.query({
      query: (id) => `category/dept/${id}`,
    }),
    addProduct: builder.mutation({
      query: ({ token, body }) => ({
        url: `product`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: ({ token, id }) => ({
        url: `product/${id}`,
        method: "DELETE",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    addCategory: builder.mutation({
      query: ({ token, body }) => ({
        url: `category`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: ({ token, id }) => ({
        url: `category/${id}`,
        method: "DELETE",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Category"],
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
  useAddProductMutation,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
  useAddCategoryMutation
} = Api;
