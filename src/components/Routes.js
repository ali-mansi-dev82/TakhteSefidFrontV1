import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import AuthGuard from "../middleware/AuthGuard";
import useResponsive from "../hooks/useResponsive";
import { LoadingScreenFixed } from "./loading";

const Index = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const MyLearning = lazy(() => import("../pages/my_learning"));
const MyTraining = lazy(() => import("../pages/my_training"));
const MyPanel = lazy(() => import("../pages/my_panel"));
const Course = lazy(() => import("../pages/course"));
const CreateCourse = lazy(() => import("../pages/create_course"));
const EditCourse = lazy(() => import("../pages/edit_course"));
const ManageCourse = lazy(() => import("../pages/manage_course"));
const Calendar = lazy(() => import("../pages/calendar"));
const EditMyInfo = lazy(() => import("../pages/edit_my_info"));
const Setting = lazy(() => import("../pages/setting"));
const NotFound = lazy(() => import("../pages/not_found"));

const RoutesComponents = () => {
  const [isMobile] = useResponsive();
  return (
    <Suspense fallback={<LoadingScreenFixed />}>
      <Routes>
        <Route path="/" element={<Index isMobile={isMobile} />} />
        <Route path="/login" element={<Login isMobile={isMobile} />} />
        <Route path="/register" element={<Register isMobile={isMobile} />} />
        <Route
          path="/dashboard"
          element={<AuthGuard component={<Dashboard isMobile={isMobile} />} />}
        />
        <Route
          path="/my-learning"
          element={<AuthGuard component={<MyLearning isMobile={isMobile} />} />}
        />
        <Route
          path="/my-training"
          element={<AuthGuard component={<MyTraining isMobile={isMobile} />} />}
        />
        <Route
          path="/my-panel"
          element={<AuthGuard component={<MyPanel isMobile={isMobile} />} />}
        />
        <Route path="/course/:id" element={<Course isMobile={isMobile} />} />
        <Route
          path="/create_course"
          element={
            <AuthGuard component={<CreateCourse isMobile={isMobile} />} />
          }
        />
        <Route
          path="/edit_course/:id"
          element={<AuthGuard component={<EditCourse isMobile={isMobile} />} />}
        />
        <Route
          path="/manage_course/:id"
          element={
            <AuthGuard component={<ManageCourse isMobile={isMobile} />} />
          }
        />
        <Route
          path="/calendar"
          element={<AuthGuard component={<Calendar isMobile={isMobile} />} />}
        />
        <Route
          path="/edit-my-info"
          element={<AuthGuard component={<EditMyInfo isMobile={isMobile} />} />}
        />
        <Route
          path="/setting"
          element={<AuthGuard component={<Setting isMobile={isMobile} />} />}
        />
        <Route path="*" element={<NotFound isMobile={isMobile} />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponents;
