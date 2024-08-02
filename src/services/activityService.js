import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_ACTIVITY_URL } from "../constants/api_endpoints";
import { getAccessTokenCookies } from "../utils/accessTokenCookie";

export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ACTIVITY_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getAccessTokenCookies();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getUpcomingActivities: build.query({
      query: () => ({
        url: "/upcoming-activities/",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetUpcomingActivitiesQuery } = activityApi;