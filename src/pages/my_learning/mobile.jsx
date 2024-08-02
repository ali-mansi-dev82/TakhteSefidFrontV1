import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

import { ReactComponent as Settings } from "../../assets/icons/settings-2.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import { useGetMyCourseQuery } from "../../services/attendCourseService";
import CourseComponent from "../dashboard/mobile/CourseComponent";
import SkeletonSection from "../../components/skeleton_section";
import useInputState from "../../hooks/useInputState";

const Mobile = () => {
  const courseDataQuery = useGetMyCourseQuery();
  const [value, handleChange] = useInputState("");

  return (
    <InitialLayoutMobile title="یادگیری من">
      <div className="inline-flex gap-4">
        <TextField
          placeholder="جستجو"
          size="small"
          fullWidth
          value={value}
          onChange={handleChange}
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
        {courseDataQuery.status === "pending" ? (
          <SkeletonSection />
        ) : (
          courseDataQuery?.data?.map((item) => <CourseComponent {...item} />)
        )}
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
