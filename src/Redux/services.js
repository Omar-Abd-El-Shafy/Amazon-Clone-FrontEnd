// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const userToken = localStorage.getItem("userToken");
// console.log(userToken);

// export const api = createApi({
//     reducerPath: "user",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333/user" }),
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: (userData) => ({
//                 url: "/login",
//                 method: "POST",
//                 body: userData,
//             }),
//         }),
//         register: builder.mutation({
//             query: (userData) => ({
//                 url: "/register",
//                 method: "POST",
//                 body: userData,
//             }),
//         }),
//     }),
// });
