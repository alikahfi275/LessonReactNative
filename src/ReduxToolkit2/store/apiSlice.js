import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://reactnative.dev/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "movies.json",
    }),
  }),
});

export const { useGetMoviesQuery } = apiSlice;
