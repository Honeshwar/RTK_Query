import apiSlice from "./ApiSlice";

const deleteSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteTodo: builder.mutation({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getAllTodos",
            undefined,
            (todos: any[]) => {
                console.log({todos})
              const index = todos.findIndex((todo) => todo.id === id);
              if (index !== -1) {
                todos.splice(index, 1); // mutate draft directly
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useDeleteTodoMutation } = deleteSlice;