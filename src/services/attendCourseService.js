import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_ATTEND_COURSE_URL } from "../constants/api_endpoints";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const attendApi = createApi({
  reducerPath: "attendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ATTEND_COURSE_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getAccessTokenCookies();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getMyCourse: build.query({
      query: () => ({
        url: "/my-course/",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetMyCourseQuery } = attendApi;
