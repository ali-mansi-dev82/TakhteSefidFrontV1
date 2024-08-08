import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthGuard from "../middleware/AuthGuard";
import MyLearning from "../pages/my_learning";
import MyTraining from "../pages/my_training";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Calendar from "../pages/calendar";
import MyPanel from "../pages/my_panel";
import Course from "../pages/course";
import CreateCourse from "../pages/create_course";
import EditCourse from "../pages/edit_course";
import GlobalManagement from "../pages/global_management";
import ManageCourse from "../pages/manage_course";
import Login from "../pages/login";
import Index from "../pages/home";
import EditMyInfo from "../pages/edit_my_info";
import NotFound from "../pages/not_found";
import Setting from "../pages/setting";
import useResponsive from "../hooks/useResponsive";

const RoutesComponents = () => {
  const [isMobile] = useResponsive();

  return (
    <Routes>
      <Route path="/" element={<Index isMobile={isMobile} />} />
      <Route path="/login" element={<Login isMobile={isMobile} />} />
      <Route path="/register" element={<Register isMobile={isMobile} />} />
      <Route path="/course/:id" element={<Course isMobile={isMobile} />} />

      <Route
        path="/create_course"
        element={<AuthGuard component={<CreateCourse isMobile={isMobile} />} />}
      />
      <Route
        path="/edit_course/:id"
        element={<AuthGuard component={<EditCourse isMobile={isMobile} />} />}
      />
      <Route
        path="/manage_course/:id"
        element={<AuthGuard component={<ManageCourse isMobile={isMobile} />} />}
      />
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
        path="/calendar"
        element={<AuthGuard component={<Calendar isMobile={isMobile} />} />}
      />
      <Route
        path="/my-panel"
        element={<AuthGuard component={<MyPanel isMobile={isMobile} />} />}
      />
      <Route
        path="/edit-my-info"
        element={<AuthGuard component={<EditMyInfo isMobile={isMobile} />} />}
      />
      <Route
        path="/setting"
        element={<AuthGuard component={<Setting isMobile={isMobile} />} />}
      />
      <Route
        path="/global_management"
        element={
          <AuthGuard component={<GlobalManagement isMobile={isMobile} />} />
        }
      />
      <Route path="*" element={<NotFound isMobile={isMobile} />} />
    </Routes>
  );
};

export default RoutesComponents;
