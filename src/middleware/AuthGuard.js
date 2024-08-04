import React from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import AuthModal from "../modules/auth/modal";

const AuthGuard = ({ component, role = "user" }) => {
  const { loading, isAuthed, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      {loading && (
        <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50">
          <CircularProgress variant="indeterminate" color="primary" />
        </div>
      )}
      {!loading && isSuccess && isAuthed && component}
      {!loading && isError && !isAuthed && <AuthModal open={true} />}
    </>
  );
};

export default AuthGuard;
