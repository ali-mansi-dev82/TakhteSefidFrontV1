import {
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";

import { ReactComponent as X } from "../../../../assets/icons/x.svg";

const CheckOtp = ({ toggleOpen }) => {
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
          <h3 className="text-lg text-gray-700 mb-2">کد تایید را وارد کنید.</h3>
          <p className=" pb-6 text-sm text-gray-400 leading-7">
            کد ارسال شده به شماره{" "}
            <span className="YekanBakhFaNum">09919564789</span> را در وارد کنید.
          </p>
          <TextField
            type="number"
            placeholder="کد تایید"
            label={"کد تایید"}
            fullWidth
            autoFocus
          />
          <div className="flex justify-center flex-wrap gap-1 text-xs pb-3 text-gray-500 mt-16">
            <span className="YekanBakhFaNum">01:32</span> مانده تا تلاش مجدد
          </div>
          <Button fullWidth variant="contained" size="large">
            تایید
          </Button>
        </form>
      </DialogContent>
    </>
  );
};

export default CheckOtp;
