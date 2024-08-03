import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bindActionCreators } from "@reduxjs/toolkit";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import { role_convertor } from "../../constants/role";
import { userInfoSchema } from "./schemas";
import { update_my_info } from "../../features/my_info/action";
import { log_in } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Mobile = ({ update_my_info, log_in }) => {
  const { userInfo, userToken } = useSelector((redux) => redux.auth);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInfoSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { fullname, email, mobile } = data;
      const { payload } = await update_my_info({
        fullname,
        email,
        mobile,
      });

      if (payload?.statusCode && payload?.statusCode === 201) {
        log_in({
          userToken,
          userInfo: { ...userInfo, fullname, email, mobile },
        });
        navigation(`/my-panel`);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InitialLayoutMobile
        title="ویرایش اطلاعات من"
        inerrButtonNavigation={
          <div className="w-full inline-flex gap-4 px-4">
            <Button variant="contained" size="medium" type="submit" fullWidth>
              {loading ? (
                <CircularProgress color="inherit" size={26} />
              ) : (
                `ثبت دوره`
              )}
            </Button>
            <Button variant="outlined" size="medium" fullWidth>
              انصراف
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <TextField
            {...register("fullname")}
            label="نام "
            size="small"
            fullWidth
            defaultValue={userInfo?.fullname}
          />
          <div className="text-red-700 text-xs">
            {errors?.fullname && errors?.fullname?.message}
          </div>
          <TextField
            {...register("email")}
            label="ایمیل"
            size="small"
            fullWidth
            InputProps={
              userInfo?.email && { readOnly: true, disableUnderline: true }
            }
            defaultValue={userInfo?.email}
          />
          <div className="text-red-700 text-xs">
            {errors?.email && errors?.email?.message}
          </div>
          <TextField
            {...register("mobile")}
            label="موبایل"
            size="small"
            fullWidth
            InputProps={
              userInfo?.mobile && { readOnly: true, disableUnderline: true }
            }
            defaultValue={userInfo?.mobile}
          />
          <div className="text-red-700 text-xs">
            {errors?.mobile && errors?.mobile?.message}
          </div>
          <div className="inline-flex gap-6">
            <TextField
              label="نقش"
              size="small"
              InputProps={{ readOnly: true, disableUnderline: true }}
              fullWidth
              value={role_convertor[userInfo?.role] || ""}
            />
            <div
              className={`inline-flex items-center rounded-md justify-center text-sm w-2/3 px-4 ${
                userInfo?.verfiedAccount
                  ? "bg-green-100 text-green-900"
                  : "bg-red-100 text-red-800"
              }`}
            >
              حساب {userInfo?.verfiedAccount ? "تایید شده" : "تایید نشده"}
            </div>
          </div>
        </div>
      </InitialLayoutMobile>
    </form>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ update_my_info, log_in }, dispatch);

export default connect(null, mapDispatchToProps)(Mobile);
