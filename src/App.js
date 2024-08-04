import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useGetUserDetailsQuery } from "./services/authService";
import { log_in, failed_request } from "./features/auth/authSlice";
import RoutesComponents from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

const App = ({ log_in, failed_request }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetUserDetailsQuery();

  useEffect(() => {
    if (!isLoading && isError && error) failed_request();
    else if (!isLoading && isSuccess && data) log_in({ userInfo: data });
  }, [data, isLoading, isSuccess, isError, error, failed_request, log_in]);

  return (
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_in, failed_request }, dispatch);
export default connect(null, mapDispatchToProps)(App);
