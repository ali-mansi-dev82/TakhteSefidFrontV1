import {
  Button,
  DialogContent,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as KeyRound } from "../../../../assets/icons/key-round.svg";
import { ReactComponent as PrefixDigit } from "../../../../assets/icons/prefix-digit.svg";

const SendOtp = () => {
  return (
    <>
      <DialogContent className="h-max lg:w-[450px]  lg:!mza-w-[50vw] lg:!max-h-[70vh] text-gray-800">
        <form className="h-max pt-8 pb-6">
          <h3 className="text-lg text-gray-700 mb-2">
            شماره موبایل خود را وارد کنید
          </h3>
          <p className=" pb-6 text-sm text-gray-400 leading-7">
            قبل از ثبت آگهی، لطفاً وارد حساب خود شوید. کد تأیید به این شماره
            پیامک می‌شود.
          </p>
          <TextField
            type="number"
            placeholder="شماره موبایل"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <PrefixDigit />
                </InputAdornment>
              ),
            }}
            label="موبایل"
            fullWidth
            autoFocus
          />
          <div className="flex flex-wrap gap-2 text-xs pb-4 mt-2 text-gray-400 mb-6">
            ثبت نام یا ورود به منزله تایید
            <span className="text-primary-default">شرایط استفاده از خدمات</span>
            {"  و  "}
            <span className="text-primary-default"> حریم خصوصی</span> است.
          </div>
          <Button fullWidth variant="contained" size="large">
            ارسال کد
          </Button>
        </form>
        <Divider className="!text-gray-400 !text-sm">ورود از طریق</Divider>
        <Link to="/login">
          <Button
            fullWidth
            variant="outlined"
            size="large"
            startIcon={
              <span className="text-gray-400">
                <KeyRound />
              </span>
            }
            className="!mt-4"
          >
            ورود با رمز عبور
          </Button>
        </Link>
      </DialogContent>
    </>
  );
};

export default SendOtp;
