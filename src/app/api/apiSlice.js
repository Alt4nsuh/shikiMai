import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../../features/auth/authSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.78.151:8000/api/v1/",
  }),
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: () => ({
        url: "refresh",
        method: "GET",
        credentials: "include",
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
