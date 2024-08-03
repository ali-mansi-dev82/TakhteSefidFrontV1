import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import { authApi } from "../services/authService";
import { activityApi } from "../services/activityService";
import { attendApi } from "../services/attendCourseService";
import { courseApi } from "../services/courseService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [attendApi.reducerPath]: attendApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(activityApi.middleware)
      .concat(attendApi.middleware)
      .concat(courseApi.middleware),
});
export default store;
