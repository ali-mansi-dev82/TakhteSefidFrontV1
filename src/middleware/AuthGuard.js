import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { LoadingScreenFixed } from "../components/loading";

const AuthModal = lazy(() => import("../modules/auth/modal"));

const AuthGuard = ({ component, role = "user" }) => {
  const { loading, isAuthed, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  return (
    <Suspense fallback={<LoadingScreenFixed />}>
      {!loading && isSuccess && isAuthed && component}
      {!loading && isError && !isAuthed && <AuthModal open={true} />}
    </Suspense>
  );
};

export default AuthGuard;
