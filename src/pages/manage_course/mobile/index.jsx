import React from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Pagination,
  Select,
  Switch,
  Tab,
  Tabs,
} from "@mui/material";

import InitialLayoutMobile from "../../../layouts/mobile/single_layout";
import MainContainer from "../../../components/container";
import image from "../../../assets/image 1.png";
import { ReactComponent as PenLine } from "../../../assets/icons/pen-line.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import AvatarGroupWithImage from "../../../components/avatar_group";
import MemberTable from "../components/member_table";

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

          {value === 0 && (
            <div className="flex flex-col gap-4">
              <div className="inline-flex gap-3">
                <Button variant="contained">ثبت نام کاربر جدید</Button>
                <Button variant="outlined">ثبت نام گروهی</Button>
              </div>
              <label
                className="inline-flex items-center border border-gray-200 relative bg-gray-100 rounded-lg"
                htmlFor="search"
              >
                <span className="absolute right-3">
                  <Search />
                </span>
                <input
                  type="text"
                  id="search"
                  placeholder="جستجو در نام ها"
                  className="w-full outline-none pr-10 bg-gray-100"
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  sx={{ border: 0 }}
                  className="!border-0 !outline-none"
                  variant="outlined"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </label>
              <MemberTable />
              <Pagination count={10} variant="outlined" color="primary" />
            </div>
          )}
          {value === 1 && (
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="فعال بودن دوره"
              />
            </FormGroup>
          )}
        </div>
      </MainContainer>
    </InitialLayoutMobile>
  );
};

export default Mobile;
