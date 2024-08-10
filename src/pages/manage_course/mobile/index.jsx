import React from "react";
import { Button, Tab, Tabs } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import InitialLayoutMobile from "../../../layouts/mobile/single_layout";
import MainContainer from "../../../components/container";
import { ReactComponent as PenLine } from "../../../assets/icons/pen-line.svg";
import AvatarGroupWithImage from "../../../components/avatar_group";
import SettingTab from "./tabs/setting_tab";
import MemberTab from "./tabs/member_tab";
import { useGetCourseDetailQuery } from "../../../services/courseService";
import { useGetMyCourseManageQuery } from "../../../services/myCourseManageService";

const Mobile = () => {
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  const { data } = useGetCourseDetailQuery(id);
  const manageData = useGetMyCourseManageQuery(id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <InitialLayoutMobile title="مدیریت دوره" container="off">
      <img
        loading="lazy"
        src={data?.data?.image}
        alt="courseimage"
        className="w-full border-b border-gray-200"
      />
      <MainContainer className="py-5">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-lg font-bold text-gray-700">
                {data?.data?.title}
              </div>
              <AvatarGroupWithImage count={data?.attendes} />
            </div>
            <Link to={`/edit_course/${id}`}>
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
            </Link>
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

          {value === 0 && <MemberTab data={manageData?.data?.users} />}
          {value === 1 && <SettingTab data={manageData?.data?.course} />}
        </div>
      </MainContainer>
    </InitialLayoutMobile>
  );
};

export default Mobile;
