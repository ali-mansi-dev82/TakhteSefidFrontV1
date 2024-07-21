import {
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";

import { ReactComponent as X } from "../../../../assets/icons/x.svg";
import { Link } from "react-router-dom";

const Register = ({ toggleOpen }) => {
  return (
    <>
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300  !py-[20px]"
      >
        <h1 className="text-base  text-gray-800">ساخت حساب کاربری</h1>
        <IconButton onClick={toggleOpen}>
          <X size={16} />
        </IconButton>
      </DialogTitle>
      <DialogContent className="w-auto lg:!min-w-[450px] lg:!max-h-[50vh] text-gray-800">
        <form className="h-max pt-8 pb-6">
          <h3 className="text-lg text-gray-700 mb-2">
            نام کاربری و کلمه عبور را وارد کنید.
          </h3>
          <p className="pb-6 text-sm text-gray-400 leading-7">
            قبل از استفاده از سامانه، لطفاً وارد حساب خود شوید.
          </p>
          <div className="w-full flex flex-col gap-3 mb-6">
            <TextField
              type="number"
              placeholder="نام کاربری"
              label={"نام کاربری"}
              fullWidth
              autoFocus
              className="!mb-2"
            />
            <TextField
              type="number"
              placeholder="کلمه عبور"
              label={"کلمه عبور"}
              fullWidth
              autoFocus
            />
            <div className="flex flex-wrap gap-1 text-xs pb-4  text-gray-500">
              ثبت نام به منزله تایید
              <span className="text-primary-default">
                شرایط استفاده از خدمات
              </span>
              {"  و  "}
              <span className="text-primary-default"> حریم خصوصی</span> است.
            </div>
          </div>
          <Button fullWidth variant="contained" size="large">
            ثبت نام
          </Button>
          <div className="flex flex-wrap gap-2 text-sm mt-4  text-gray-500">
            حساب کاربری دارید؟
            <Link to={"#"} className="text-primary-default">
              ورود
            </Link>
          </div>
        </form>
      </DialogContent>
    </>
  );
};

export default Register;
