import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_USER_URL } from "../config";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_USER_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getAccessTokenCookies();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: "/my-info/",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetUserDetailsQuery } = authApi;
