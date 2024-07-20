import React from "react";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import MainContainer from "../../../../components/container";
import { Button } from "@mui/material";

const index = () => {
  return (
    <div className="flex flex-row justify-center bg-white items-center border-b border-gray-200 h-[65px] z-50">
      <MainContainer className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-2">
          <Button size="small">ورود</Button>
          <Button size="small" variant="contained">ثبت نام</Button>
        </div>
      </MainContainer>
    </div>
  );
};

export default index;
