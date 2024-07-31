import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import Index from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MyLearning from "./pages/my_learning";
import Calendar from "./pages/calendar";
import MyPanel from "./pages/my_panel";

import useResponsive from "./hooks/useResponsive";
import { useGetUserDetailsQuery } from "./services/authService";
import { log_in } from "./features/auth/authSlice";
import AuthGuard from "./middleware/AuthGuard";

const App = ({ log_in }) => {
  const [isMobile] = useResponsive();

  const data = useGetUserDetailsQuery();
  useEffect(() => {
    if (data?.data) {
      log_in({ userInfo: data?.data });
    }
  }, [data, log_in]);

  return (
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
        path="/calendar"
        element={<AuthGuard component={<Calendar isMobile={isMobile} />} />}
      />
      <Route
        path="/my-panel"
        element={<AuthGuard component={<MyPanel isMobile={isMobile} />} />}
      />
    </Routes>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_in }, dispatch);

export default connect(null, mapDispatchToProps)(App);
