import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import { authApi } from "../services/authService";
import { activityApi } from "../services/activityService";
import { attendApi } from "../services/attendCourseService";
import { myCourseApi } from "../services/myCourseService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [attendApi.reducerPath]: attendApi.reducer,
    [myCourseApi.reducerPath]: myCourseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(activityApi.middleware)
      .concat(attendApi.middleware)
      .concat(myCourseApi.middleware),
});
export default store;
