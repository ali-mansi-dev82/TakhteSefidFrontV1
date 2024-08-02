import React, { useEffect, useMemo, useState } from "react";
import moment from "jalali-moment";
// import { Box, Tab, Tabs } from "@mui/material";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import { useGetUpcomingActivitiesQuery } from "../../services/activityService";
import ActivityComponent from "../dashboard/mobile/ActivityComponent";

const days = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعـ"];

const Mobile = () => {
  const [daySelect, setDaySelect] = useState(moment().format("jDD"));
  const [daySelectActivity, setDaySelectActivity] = useState([]);
  const [firstDateWeekDay, setFirstDateWeekDay] = useState(undefined);

  const activities = useGetUpcomingActivitiesQuery();

  const monthData = useMemo(() => {
    if (activities.status === "fulfilled") {
      const today = moment();
      const startOfMonth = moment(today).startOf("month");
      const endOfMonth = moment(today).endOf("month");
      const daysOfMonth = [];

      for (let i = 0; i < endOfMonth.format("jDD"); i++) {
        const currentDay = moment(startOfMonth).add(i, "days");
        const dayOfMonth = currentDay.format("jDD");
        const dayOfWeek = currentDay.format("e");
        if (i === 0) setFirstDateWeekDay(Number(dayOfWeek));
        const dayActivities = activities?.data?.filter((activity) => {
          return moment
            .from(activity.start, "en", "YYYY-MM-DD")
            .isSame(currentDay, "day");
        });
        daysOfMonth.push({
          dayOfWeek,
          dayOfMonth,
          activities: dayActivities,
        });
      }

      return daysOfMonth;
    }
  }, [activities]);

  useEffect(() => {
    const daySelectData = monthData?.filter(
      (value) => value.dayOfMonth === daySelect
    );
    if (daySelectData?.length > 0) {
      const daySelectActivityData = daySelectData[0].activities;
      setDaySelectActivity(daySelectActivityData);
    }
  }, [daySelect, monthData]);

  moment.locale("fa");

  return (
    <InitialLayoutMobile title="تقویم">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-7 grid-rows-6 flex-wrap gap-y-4">
          {days.map((item) => (
            <div className="flex flex-col items-center justify-center gap-2  h-full">
              <span className="text-xs text-gray-500">{item}</span>
            </div>
          ))}

          {firstDateWeekDay &&
            firstDateWeekDay !== undefined &&
            Array(firstDateWeekDay)
              .fill()
              .map((i) => (
                <div className="flex flex-col items-center gap-2 flex-1"></div>
              ))}
          {monthData?.map((item) => (
            <div
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={setDaySelect.bind(this, item.dayOfMonth)}
            >
              <span
                className={`inline-flex flex-col w-8 h-8 items-center justify-center text-xs text-gray-700 YekanBakhFaNum font-semibold rounded-full ${
                  item.dayOfMonth === daySelect &&
                  `bg-primary-70 text-white !font-normal`
                }`}
              >
                {item.dayOfMonth}
                {item.activities.length > 0 && (
                  <span className="w-[5px] h-[5px] bg-yellow-400 rounded"></span>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col min-h-[25vh] gap-4 mt-4">
          {daySelectActivity.length > 0 ? (
            daySelectActivity?.map((item) => <ActivityComponent {...item} />)
          ) : (
            <div className="text-xs text-gray-500 text-center h-full items-stretch pt-12">
              در این روز فعالیتی ندارید !!!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="همه" />
              <Tab label="کلاسها" />
              <Tab label="تکالیف" />
              <Tab label="آزمونها" />
            </Tabs>
          </Box> */}
          {/* {value === 0 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )} */}
          {/* {value === 1 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .filter((item) => item.type === "class")
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )}
          {value === 2 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .filter((item) => item.type === "practice")
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )} */}
          {/* {value === 3 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .filter((item) => item.type === "exam")
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )} */}
        </div>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
