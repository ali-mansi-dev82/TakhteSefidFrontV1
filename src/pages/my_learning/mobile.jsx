import React from "react";
import { Button, InputAdornment, TextField } from "@mui/material";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import CourseComponent from "../dashboard/mobile/CourseComponent";
import { ReactComponent as Settings } from "../../assets/icons/settings-2.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

const Mobile = () => {
  return (
    <InitialLayoutMobile title="یادگیری من">
      <div className="inline-flex gap-4">
        <TextField
          placeholder="جستجو"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "30%", boxShadow: "none" }}
          startIcon={
            <span className="flex w-5">
              <Settings />
            </span>
          }
        >
          فیلتر
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <CourseComponent />
        <CourseComponent />
        <CourseComponent />
        <CourseComponent />
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;