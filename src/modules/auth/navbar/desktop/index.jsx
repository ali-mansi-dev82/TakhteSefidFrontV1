import React from "react";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import MainContainer from "../../../../components/container";
import { Button } from "@mui/material";
import Dropdown from "./dropdown";
import Index from "../../modal";

const index = () => {
  return (
    <div className="flex flex-row justify-center bg-white items-center border-b border-gray-200 h-[65px] fixed top-0 left-0 right-0 z-50">
      <MainContainer className="flex justify-between items-center h-[65px]">
        <div className="flex gap-16 items-center h-full">
          <Logo />
          <ul className="flex flex-row items-center gap-12 text-sm text-gray-600 h-full">
            <Dropdown />
            <li className="cursor-pointer">تعرفه ها</li>
            <li className="cursor-pointer">تماس با ما</li>
            <li className="cursor-pointer">درباره ما</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Button size="medium">ورود</Button>
          <Button size="medium" variant="contained">
            ثبت نام
          </Button>
        </div>
      </MainContainer>
      <Index />
    </div>
  );
};

export default index;
