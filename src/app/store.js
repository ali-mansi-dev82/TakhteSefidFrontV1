import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import { authApi } from "../services/authService";
import { activityApi } from "../services/activityService";
import { attendApi } from "../services/attendCourseService";
import { myCourseApi } from "../services/myCourseService";
import { courseApi } from "../services/courseService";
import { myCourseManageApi } from "../services/myCourseManageService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [myCourseApi.reducerPath]: myCourseApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [attendApi.reducerPath]: attendApi.reducer,
    [myCourseManageApi.reducerPath]: myCourseManageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(activityApi.middleware)
      .concat(attendApi.middleware)
      .concat(courseApi.middleware)
      .concat(myCourseManageApi.middleware)
      .concat(myCourseApi.middleware),
});
export default store;
