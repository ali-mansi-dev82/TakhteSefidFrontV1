import { useSelector } from "react-redux";
import React from "react";

import InitialLayoutMobile from "../../../layouts/mobile/initial_layout";
import WeekCalendar from "./week_calendar";
import ButtomDrawer from "../../edit_my_info/components/buttom_drawer";
import Courses from "./section/courses";

const Mobile = () => {
  const { userInfo } = useSelector((redux) => redux.auth);

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
        <Courses />
      </div>
      <ButtomDrawer />
    </InitialLayoutMobile>
  );
};

export default Mobile;
