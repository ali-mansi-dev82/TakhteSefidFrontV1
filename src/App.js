import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useGetUserDetailsQuery } from "./services/authService";
import { log_in } from "./features/auth/authSlice";
import RoutesComponents from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

const App = ({ log_in }) => {
  const data = useGetUserDetailsQuery();
  useEffect(() => {
    if (data?.data) {
      log_in({ userInfo: data?.data });
    }
  }, [data, log_in]);

  return (
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_in }, dispatch);
export default connect(null, mapDispatchToProps)(App);
