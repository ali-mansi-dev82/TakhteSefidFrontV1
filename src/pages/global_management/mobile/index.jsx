import React from "react";
import {
  Tab,
  Tabs,
} from "@mui/material";

import InitialLayoutMobile from "../../../layouts/mobile/single_layout";
import ReportTab from "./tabs/report_tab";
import MemberTab from "./tabs/member_tab";
import SettingTab from "./tabs/setting_tab";

const Mobile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <InitialLayoutMobile title="مدیریت دوره">
      <div className="flex flex-col gap-4">
        <div className="border-b border-gray-200">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="کاربران" />
            <Tab label="گزارشات" />
            <Tab label="تنظیمات" />
          </Tabs>
        </div>

        {value === 0 && <MemberTab />}
        {value === 1 && <ReportTab />}
        {value === 2 && <SettingTab />}
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
