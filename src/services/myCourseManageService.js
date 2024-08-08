import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_COURSE_URL } from "../constants/api_endpoints";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const myCourseManageApi = createApi({
  reducerPath: "myCourseManageApi",
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
    getMyCourseManage: build.query({
      query: (id) => ({
        url: `/manage/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetMyCourseManageQuery } = myCourseManageApi;
