import React, { useState } from "react";
// import { Button, InputAdornment, TextField } from "@mui/material";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import ActivityComponent from "../dashboard/mobile/ActivityComponent";
import { Box, Tab, Tabs } from "@mui/material";
// import CourseComponent from "../dashboard/mobile/CourseComponent";
// import { ReactComponent as Settings } from "../../assets/icons/settings-2.svg";
// import { ReactComponent as Search } from "../../assets/icons/search.svg";

const days = [
  { text: "شنبه" },
  { text: "یک" },
  { text: "دو" },
  { text: "سه" },
  { text: "چهار" },
  { text: "پنج" },
  { text: "جمعـ" },
];

const activities = [
  {
    type: "exam",
    title: "امتحان فتوشاپ",
    date: "10 فروردین 1403",
    time: "14:30",
  },
  {
    type: "practice",
    title: "انجام تکلیف طراحی گرافیک",
    date: "11 فروردین 1403",
    time: "14:30",
  },
  {
    type: "class",
    title: "طراحی گرافیک",
    date: "14 فروردین 1403",
    time: "14:30",
  },
  {
    type: "class",
    title: "طراحی بصری",
    date: "11 فروردین 1403",
    time: "14:30",
  },
];

const Mobile = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <InitialLayoutMobile title="تقویم">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-7 grid-rows-6 flex-wrap gap-y-6">
          {days.map((item) => (
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-xs text-gray-500">{item.text}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 flex-1"></div>
          <div className="flex flex-col items-center gap-2 flex-1"></div>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((item) => (
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-xs text-gray-500 YekanBakhFaNum">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          </Box>
          {value === 0 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )}
          {value === 1 && (
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
          )}
          {value === 3 && (
            <div className="flex flex-col gap-3 py-4">
              {activities
                .filter((item) => item.type === "exam")
                .map((item) => (
                  <ActivityComponent {...item} />
                ))}
            </div>
          )}
        </div>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
