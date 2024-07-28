import React from "react";
import SingleLayoutMobile from "../../layouts/mobile/single_layout";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <SingleLayoutMobile title="ورود حساب کاربری ">
      <form className="w-full h-max px-3">
        <h3 className="text-lg text-gray-700 mb-2">
          اطلاعات حساب خود را وارد کنید.
        </h3>
        <p className="pb-6 text-sm text-gray-400 leading-7">
          قبل از استفاده از سامانه، لطفاً وارد حساب خود شوید.
        </p>
        <div className="w-full flex flex-col gap-3 mb-6">
          <TextField
            placeholder="نام کاربری"
            label={"نام کاربری"}
            fullWidth
            autoFocus
            className="!mb-2"
            autoComplete="off"
          />
          <TextField
            placeholder="کلمه عبور"
            label={"کلمه عبور"}
            fullWidth
            autoComplete="off"
          />
          <div className="flex flex-wrap gap-1 text-xs pb-4  text-gray-500">
            ورود به منزله تایید
            <span className="text-primary-default">شرایط استفاده از خدمات</span>
            {"  و  "}
            <span className="text-primary-default"> حریم خصوصی</span> است.
          </div>
        </div>
        <Button fullWidth variant="contained" size="large">
          ورود
        </Button>
        <div className="flex flex-wrap gap-2 text-sm mt-4  text-gray-500">
          حساب کاربری ندارید؟
          <Link to={"/register"} className="text-primary-default">
            ثبت نام
          </Link>
        </div>
      </form>
    </SingleLayoutMobile>
  );
};

export default Login;
