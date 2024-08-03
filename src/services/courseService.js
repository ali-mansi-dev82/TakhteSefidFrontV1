import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_COURSE_URL } from "../constants/api_endpoints";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_COURSE_URL,
    prepareHeaders: async (headers, { getState }) => {
      return headers
    },
  }),
  endpoints: (build) => ({
    getCourseDetail: build.query({
      query: (id) => ({
        url: `/find/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetCourseDetailQuery } = courseApi;
