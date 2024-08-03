import { Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";

import useResponsive from "../../../hooks/useResponsive";
import SendOtp from "./send_otp";
import CheckOtp from "./check_otp";
import { ReactComponent as X } from "../../../assets/icons/x.svg";
import { useNavigate } from "react-router-dom";

const Index = ({ open, onClose }) => {
  const [isSendOtpLevel, setIsSendOtpLevel] = useState(true);
  const [isMobile] = useResponsive();
  const [mobile, setMobile] = useState("");
  const [expireCode, setExpireCode] = useState(0);
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) return onClose();
    navigate(`/dashboard`);
  };
  return (
    <Dialog
      fullScreen={isMobile}
      open={open}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300  !py-[20px]"
      >
        <h1 className="text-base  text-gray-800">ورود با حساب کاربری</h1>
        <IconButton onClick={onClose}>
          <X size={16} />
        </IconButton>
      </DialogTitle>
      {isSendOtpLevel ? (
        <SendOtp
          nextLevel={setIsSendOtpLevel.bind(this, false)}
          setMobile={setMobile}
          setExpireCode={setExpireCode}
        />
      ) : (
        <CheckOtp
          onClose={handleClose}
          mobile={mobile}
          expireCode={expireCode}
        />
      )}
    </Dialog>
  );
};
export default Index;
