import { yupResolver } from "@hookform/resolvers/yup";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React from "react";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { addSection } from "../../features/course/createCourseSlice";
import { create_course } from "../../features/course/action";
import UploadImages from "./components/image/upload_image";
import AddActivity from "./components/modals/add_activity";
import { createCourseSchema } from "./schema";
import Section from "./components/section";

const Mobile = ({ create_course, addSection }) => {
  const { image, sections, activityModal } = useSelector(
    (redux) => redux.create_course
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createCourseSchema),
  });

  const onSubmit = (data) => {
    data.sections = sections;
    data.image = image.url;
    create_course(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InitialLayoutMobile
          title="ثبت دوره جدید"
          inerrButtonNavigation={
            <div className="w-full inline-flex gap-4 px-4">
              <Button variant="contained" size="medium" type="submit" fullWidth>
                ثبت دوره
              </Button>
              <Link to={`/dashboard`} className="w-full">
                <Button variant="outlined" size="medium" fullWidth>
                  انصراف
                </Button>
              </Link>
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            <UploadImages />
            <div className="flex flex-col gap-2">
              <TextField
                {...register("title")}
                error={errors?.title?.message}
                label="عنوان دوره"
              />
              <p className="text-xs text-red-600">{errors?.title?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                {...register("description")}
                label="توضیحات"
                multiline
                rows={3}
              />
              <p className="text-xs text-red-600">
                {errors?.description?.message}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                {...register("start")}
                label="تاریخ شروع"
                type="date"
              />
              <p className="text-xs text-red-600">{errors?.start?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <TextField {...register("end")} label="تاریخ پایان" type="date" />
              <p className="text-xs text-red-600">{errors?.end?.message}</p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-base text-primary-60 font-bold">سرفصل ها</p>
              <ul className="flex flex-col gap-4 justify-center rounded-md overflow-hidden">
                {sections?.map((section, index) => (
                  <Section key={section?.id} {...section} sectionIndex={index} />
                ))}
                <li
                  onClick={addSection}
                  className="text-center py-1 border border-gray-300 rounded-lg"
                >
                  <Button
                    variant="text"
                    startIcon={
                      <span className="flex w-4">
                        <Plus />
                      </span>
                    }
                  >
                    سرفصل جدید
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </InitialLayoutMobile>
      </form>
      {activityModal?.isOpen && <AddActivity />}
    </>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ create_course, addSection }, dispatch);
export default connect(null, mapDispatchToProps)(Mobile);
