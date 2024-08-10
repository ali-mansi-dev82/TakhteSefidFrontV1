import { useSelector } from "react-redux";
import React, { lazy, Suspense } from "react";

import InitialLayoutMobile from "../../../layouts/mobile/initial_layout";
import ButtomDrawer from "../../edit_my_info/components/buttom_drawer";
import { LoadingSection } from "../../../components/loading";

const WeekCalendar = lazy(() => import("./week_calendar"));
const Courses = lazy(() => import("./section/courses"));

const Mobile = () => {
  const { userInfo } = useSelector((redux) => redux.auth);

  return (
    <Suspense fallback={<LoadingSection />}>
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
    </Suspense>
  );
};

export default React.memo(Mobile);
