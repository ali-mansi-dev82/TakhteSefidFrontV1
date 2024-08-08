import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_COURSE_URL } from "../constants/api_endpoints";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const allCourseApi = createApi({
  reducerPath: "allCourseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_COURSE_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getAccessTokenCookies();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getAllCourseDetails: build.query({
      query: () => ({
        url: "/all-course/",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetAllCourseDetailsQuery } = allCourseApi;
