import apiSlice from "../ApiSlice";

// for PUT, PATCH, DELETE, UPDATE WE USE MUTATION (builder.mutation) AND FOR GET WE USE .QUERY (builder.query)
const deleteSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteTodoMutation } = deleteSLice;

// on application and on base url only recommanded on apislice or config obj for api
