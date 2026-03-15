import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

// RTK query just a configuration obj for api calls and it manage loding error internally and redux store changes

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => {
    return {
      getAllTodos: builder.query({
        query: () => "https://jsonplaceholder.typicode.com/todos", // this will override baseQuery base api endpoint configuration added or can pass '/todos'

        // mostly data from BE is not in format what we want
        // transformResponse: (data)=>{
        //   return data;
        // }
      }),
      getTodo: builder.query({
        query: (id) => `/todos/${id}`,
      }),

      // Todo: trigger api when i want

      // }),
    };
  },
});

/**
 * 5 type of different hooks that RTK query give use to manage api calls and caching
 * # when using @reduxjs/toolkit/query not react
 * 1. useQuery,
 * 2. useLazyQuery,..
 *
 * # when using @reduxjs/toolkit/query/react
 * this createApi fn create hook, that naming convension will be like:
 * 1. useQuery ==> use<ApiEndpointFnName>Query
 * 2. useLazyQuery ==> useLazy<ApiEndpointFnName>Query
 */

export default apiSlice;
export const { useGetAllTodosQuery, useGetTodoQuery } = apiSlice;

// custom
// const apiSlice = createApi({
//   baseQuery: async (url) => {
//     const response = await fetch(url);
//     const todos = await response.json();
//     return { data: todos };
//   },
//   endpoints: (builder) => {
//     return {
//       getAllTodos: builder.query({
//         query: () => "https://jsonplaceholder.typicode.com/todos", // this will override baseQuery base api endpoint configuration added or can pass '/todos'

//         // way to add api logic here
//         //   queryFn: async () => {
//         //     const response = await fetch(
//         //       "https://jsonplaceholder.typicode.com/todos",
//         //     );
//         //     const todos = await response.json();

//         //     return { data: todos };// signature data as key
//         //   },
//       }),
//     };
//   },
// });
