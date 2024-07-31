import React from "react";
import {
  Button,
  Tab,
  Tabs,
} from "@mui/material";

import InitialLayoutMobile from "../../../layouts/mobile/single_layout";
import MainContainer from "../../../components/container";
import image from "../../../assets/image 1.png";
import { ReactComponent as PenLine } from "../../../assets/icons/pen-line.svg";

import AvatarGroupWithImage from "../../../components/avatar_group";

import SettingTab from "./tabs/setting_tab";
import MemberTab from "./tabs/member_tab";

const Mobile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <InitialLayoutMobile title="مدیریت دوره" container="off">
      <img src={image} alt="" className="w-full border-b border-gray-200" />
      <MainContainer className="py-5">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-lg font-bold text-gray-700">
                طراحی رابط کاربری
              </div>
              <div className="text-sm text-gray-400">حسن نریمانی</div>
              <AvatarGroupWithImage />
            </div>
            <Button
              variant="outlined"
              endIcon={
                <span className="inline-flex w-3">
                  <PenLine />
                </span>
              }
            >
              ویرایش دوره
            </Button>
          </div>
          <div className="border-b border-gray-200">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="کاربران" />
              <Tab label="تنظیمات" />
            </Tabs>
          </div>

          {value === 0 && <MemberTab />}
          {value === 1 && <SettingTab />}
        </div>
      </MainContainer>
    </InitialLayoutMobile>
  );
};

export default Mobile;
