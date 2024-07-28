import {
  Button,
  CircularProgress,
  DialogContent,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ReactComponent as KeyRound } from "../../../assets/icons/key-round.svg";
import { ReactComponent as PrefixDigit } from "../../../assets/icons/prefix-digit.svg";
import { send_otp } from "../../../features/auth/action";
import { sendOtpSchema } from "./schemas";
import { Link } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const SendOtp = ({ nextLevel, setMobile, setExpireCode, send_otp }) => {
  const [loading, setLoading] = useState(false);
  const [errore, setErrore] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendOtpSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const { mobile } = data;

      const { payload } = await send_otp({
        mobile: `0${mobile}`,
      });
      console.log(payload);

      if (payload?.statusCode && payload?.statusCode === 200) {
        setMobile("0" + data?.mobile);
        setExpireCode(payload?.expiresIn);
        nextLevel();
        setLoading(false);
      } else {
        setLoading(false);
        if (payload === " last code not expire") {
          setErrore("کد ارسال شده به دستگاه شما هنوز منقضی نشده است");
        }
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="h-max lg:w-[450px]  lg:!mza-w-[50vw] lg:!max-h-[70vh] text-gray-800">
      <form onSubmit={handleSubmit(onSubmit)} className="h-max pt-8 pb-6" autoComplete="off">
        <h3 className="text-lg text-gray-700 mb-2">
          شماره موبایل خود را وارد کنید
        </h3>
        <p className=" pb-6 text-sm text-gray-400 leading-7">
          قبل از ثبت آگهی، لطفاً وارد حساب خود شوید. کد تأیید به این شماره پیامک
          می‌شود.
        </p>
        <TextField
          {...register("mobile")}
          type="number"
          placeholder="شماره موبایل"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <PrefixDigit />
              </InputAdornment>
            ),
          }}
          error={errors?.mobile?.message || undefined}
          label="موبایل"
          fullWidth
          autoFocus
        />
        <div className="text-red-500 text-xs mt-2">
          {errors?.mobile?.message || errore || ""}
        </div>
        <div className="flex flex-wrap gap-2 text-xs pb-4 mt-2 text-gray-400 mb-6">
          ثبت نام یا ورود به منزله تایید
          <span className="text-primary-default">شرایط استفاده از خدمات</span>
          {"  و  "}
          <span className="text-primary-default"> حریم خصوصی</span> است.
        </div>
        <Button fullWidth variant="contained" size="large" type="submit">
          {loading ? (
            <CircularProgress color="inherit" size={26} />
          ) : (
            `ارسال کد`
          )}
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
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ send_otp }, dispatch);

export default connect(null, mapDispatchToProps)(SendOtp);
