import {
  Button,
  CircularProgress,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { checkOtpSchema } from "./schemas";
import { check_otp } from "../../../features/auth/action";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { setAccessTokenCookies } from "../../../utils/accessTokenCookie";
import { log_in } from "../../../features/auth/authSlice";

const CheckOtp = ({ onClose, mobile, expireCode, check_otp, log_in }) => {
  const [loading, setLoading] = useState(false);
  const [errore, setErrore] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkOtpSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const { code } = data;

      const { payload } = await check_otp({
        code,
        mobile,
      });

      if (payload?.statusCode && payload?.statusCode === 200) {
        setAccessTokenCookies(payload?.token);
        log_in({ userToken: payload?.token, userInfo: payload?.user });
        onClose();
        setLoading(false);
      } else {
        setLoading(false);
        if (payload === " last code not expire") {
          setErrore("کد وارد شده اشتباه است");
        }
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="w-auto lg:!min-w-[450px] lg:!max-h-[50vh] text-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-max pt-8 pb-6"
        autoComplete="off"
      >
        <h3 className="text-lg text-gray-700 mb-2">کد تایید را وارد کنید.</h3>
        <p className=" pb-6 text-sm text-gray-400 leading-7">
          کد ارسال شده به شماره <span className="YekanBakhFaNum">{mobile}</span>{" "}
          را در وارد کنید.
        </p>
        <TextField
          {...register("code")}
          type="number"
          placeholder="کد تایید"
          label={"کد تایید"}
          fullWidth
          autoFocus
          autoComplete="off"
        />
        <div className="text-red-500 text-xs mt-2">
          {errors?.mobile?.message || errore || ""}
        </div>
        <div className="flex justify-center flex-wrap gap-1 text-xs pb-3 text-gray-500 mt-16">
          <span className="YekanBakhFaNum">01:32</span> مانده تا تلاش مجدد
        </div>
        <Button type="submit" fullWidth variant="contained" size="large">
          {loading ? <CircularProgress color="inherit" size={26} /> : `تایید`}
        </Button>
      </form>
    </DialogContent>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ check_otp, log_in }, dispatch);

export default connect(null, mapDispatchToProps)(CheckOtp);
