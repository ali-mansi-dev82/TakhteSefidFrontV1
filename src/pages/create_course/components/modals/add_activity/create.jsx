import { DialogActions, DialogContent, TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import React from "react";

import { addActivity } from "../../../../../features/course/createCourseSlice";
import { createActivitySchema } from "./schema";

const Create = ({ onClose, type, addActivity }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createActivitySchema),
  });

  const onSubmit = (data) => {
    const activiytData = { type, ...data };
    addActivity(activiytData);
    onClose();
  };

  const convert_type = {
    class: "کلاس",
    file: "فایل",
    practice: "تمرین",
    exam: "آزمون",
    video: "ویدیو",
    blog: "مقاله",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <div className="flex flex-col gap-5 pb-5 h-[calc(100vh-179px)]">
          <p className="inline-flex text-primary-60 text-base">
            {convert_type[type]} جدید
          </p>
          <div className="flex flex-col gap-2">
            <TextField
              {...register("title")}
              label="عنوان"
              error={errors?.title?.message}
            />
            {errors?.title?.message && (
              <p className="text-xs text-red-600 pb-3 pt-1">
                {errors?.title?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <TextField
              {...register("description")}
              label="توضیحات"
              multiline
              rows={3}
            />
            {errors?.description?.message && (
              <p className="text-xs text-red-600 pb-3 pt-1">
                {errors?.description?.message}
              </p>
            )}
          </div>
          {["class", "exam", "practice"].includes(type) && (
            <div className="flex flex-col gap-2">
              <TextField
                {...register("start")}
                type="datetime-local"
                label="تاریخ شروع"
                required
              />
              {errors?.description?.message && (
                <p className="text-xs text-red-600 pb-3 pt-1">
                  {errors?.description?.message}
                </p>
              )}
            </div>
          )}
          {["class", "exam", "practice"].includes(type) && (
            <div className="flex flex-col gap-2">
              <TextField
                {...register("end")}
                type="datetime-local"
                label="تاریخ پایان"
                required
              />
              {errors?.description?.message && (
                <p className="text-xs text-red-600 pb-3 pt-1">
                  {errors?.description?.message}
                </p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
      <DialogActions className="inline-flex gap-2 border-t border-gray-200 !p-4">
        <Button variant="contained" type="submit" fullWidth>
          ادامه
        </Button>
        <Button variant="outlined" onClick={onClose} fullWidth>
          انصراف
        </Button>
      </DialogActions>
    </form>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addActivity }, dispatch);
export default connect(null, mapDispatchToProps)(Create);
