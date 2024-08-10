import React from "react";
import { useSelector } from "react-redux";
import MyTraining from "./my_training";
import MyLearning from "./my_learning";

const Courses = () => {
  const { userInfo } = useSelector((redux) => redux.auth);
  return (
    <>
      {userInfo?.role === "admin" && <MyTraining />}
      {userInfo?.role === "teacher" && <MyTraining />}
      {userInfo?.role === "user" && <MyLearning />}
    </>
  );
};

export default React.memo(Courses);
