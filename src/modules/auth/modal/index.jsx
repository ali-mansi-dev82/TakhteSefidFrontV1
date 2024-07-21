import { Dialog } from "@mui/material";
import React from "react";

import useResponsive from "../../../hooks/useResponsive";
import SendOtp from "./basic_auth/register";

const Index = ({ open, toggleOpen }) => {
  const [isMobile] = useResponsive();
  return (
    <Dialog
      fullScreen={isMobile}
      open={open}
      onClose={toggleOpen}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <SendOtp toggleOpen={toggleOpen} />
    </Dialog>
  );
};
export default Index;
