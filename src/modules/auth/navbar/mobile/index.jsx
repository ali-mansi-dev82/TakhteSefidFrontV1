import React from "react";
import { Button } from "@mui/material";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import { ReactComponent as Hamberger } from "../../../../assets/icons/elipes.svg";
import MainContainer from "../../../../components/container";

const index = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-white border-b border-gray-200 h-[65px] fixed top-0 left-0 right-0 z-50">
      <MainContainer className="flex justify-between items-center">
        <div className="flex gap-2">
          <span className="cursor-pointer">
            <Hamberger />
          </span>
          <Logo />
        </div>
        <Button size="small" variant="contained">
          ثبت نام
        </Button>
      </MainContainer>
    </div>
  );
};

export default index;