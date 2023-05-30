import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tasks" as const, id })),
              { type: "Tasks", id: "LIST" },
            ]
          : { type: "Tasks", id: "LIST" },
    }),
    setTasks: build.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const { useGetTasksQuery, useSetTasksMutation } = tasksApi;
