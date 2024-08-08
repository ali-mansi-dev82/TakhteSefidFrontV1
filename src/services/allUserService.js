import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_USER_URL } from "../constants/api_endpoints";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const allUserApi = createApi({
  reducerPath: "allUserApi",
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
    getAllUserDetails: build.query({
      query: () => ({
        url: "/all-user/",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetAllUserDetailsQuery } = allUserApi;
