import { Dialog, DialogTitle, IconButton } from "@mui/material";
import React from "react";

import useResponsive from "../../../hooks/useResponsive";
import SendOtp from "./otp_auth/send_otp";
import { ReactComponent as X } from "../../../assets/icons/x.svg";

const Index = ({ open, onClose }) => {
  const [isMobile] = useResponsive();

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
      <SendOtp />
    </Dialog>
  );
};
export default Index;
