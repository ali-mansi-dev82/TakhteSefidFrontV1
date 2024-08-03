import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { ReactComponent as Chevron } from "../../../assets/icons/chevron-down.svg";
import { useGetMyCourseQuery } from "../../../services/attendCourseService";
import InitialLayoutMobile from "../../../layouts/mobile/initial_layout";
import CourseComponent from "./CourseComponent";
import WeekCalendar from "./week_calendar";
import SkeletonSection from "../../../components/skeleton_section";
import ButtomDrawer from "../../edit_my_info/components/buttom_drawer";

const Mobile = () => {
  const { userInfo } = useSelector((redux) => redux.auth);

  const courseData = useGetMyCourseQuery();

  return (
    <InitialLayoutMobile>
      <div className="flex flex-col w-full gap-6">
        <div className="text-base text-primary-60 font-semibold">
          خوش اومدی،{" "}
          <span>
            {userInfo.fullname
              ? `${userInfo.fullname} جان!`
              : "کاربر تخته سفید"}
          </span>{" "}
          <span className="text-2xl"> 👋 </span>
        </div>
        <WeekCalendar />
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-700">
              درس های من (اخیرا مراجعه شده)
            </span>
            <Link
              to={`/my-learning`}
              className="text-sm flex gap-2 justify-center text-primary-60"
            >
              همه
              <span className="rotate-90">
                <Chevron />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {courseData.status === "pending" ? (
              <SkeletonSection />
            ) : (
              courseData?.data?.map((item) => <CourseComponent {...item} />)
            )}
          </div>
        </div>
      </div>
      <ButtomDrawer />
    </InitialLayoutMobile>
  );
};

export default Mobile;
