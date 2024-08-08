import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import InitialLayoutMobile from "../../../layouts/mobile/single_layout";
import { log_out } from "../../../features/auth/authSlice";
import { Box, Tab, Tabs } from "@mui/material";
import GeneralTab from "./tabs/general";
import UsersTab from "./tabs/users";
import CoursesTab from "./tabs/courses";
// import ServicesTab from "./tabs/services";
// import ReportsTab from "./tabs/reports";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

const Mobile = ({ log_out }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <InitialLayoutMobile title="تنظیمات">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <Tab label="کلی" />
          <Tab label="کاربران" />
          <Tab label="دوره ها" />
          {/* <Tab label="سرویس ها" /> */}
          {/* <Tab label="گزارشات" /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GeneralTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UsersTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CoursesTab />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={3}>
        <ServicesTab />
      </CustomTabPanel> */}
      {/* <CustomTabPanel value={value} index={4}>
        <ReportsTab />
      </CustomTabPanel> */}
    </InitialLayoutMobile>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_out }, dispatch);

export default connect(null, mapDispatchToProps)(Mobile);
