import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "/";

export const postsAPI = createApi({
  reducerPath: "api/posts",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page }) => `/v1/posts?page=${page}`,
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery } = postsAPI;
