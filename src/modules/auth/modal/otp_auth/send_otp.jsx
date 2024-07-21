import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

import { ReactComponent as X } from "../../../../assets/icons/x.svg";
import { ReactComponent as KeyRound } from "../../../../assets/icons/key-round.svg";
import { ReactComponent as PrefixDigit } from "../../../../assets/icons/prefix-digit.svg";

const SendOtp = ({ toggleOpen }) => {
  return (
    <>
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300  !py-[20px]"
      >
        <h1 className="text-base  text-gray-800">ورود با حساب کاربری</h1>
        <IconButton onClick={toggleOpen}>
          <X size={16} />
        </IconButton>
      </DialogTitle>
      <DialogContent className="w-auto lg:!min-w-[450px] lg:!max-h-[50vh] text-gray-800">
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
          <div className="flex flex-wrap gap-2 text-sm pb-4 mt-2 text-gray-600 mb-6">
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
      </DialogContent>
    </>
  );
};

export default SendOtp;
