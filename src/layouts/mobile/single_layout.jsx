import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

import MainContainer from "../../components/container";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-down.svg";
import ButtomNavigation from "../../components/buttomNavigation";

const SingleLayoutMobile = ({
  children,
  title = "",
  navbarActions,
  buttonNavigation,
  inerrButtonNavigation = null,
  container,
}) => {
  let navigate = useNavigate();

  return (
    <>
      {/* <AppBar
        className="!bg-white !shadow-none border-b-2 border-gray-200 h-[65px] justify-center"
        position="fixed"
      >
        <MainContainer className={`w-full flex justify-between gap-5 py-4`}>
          <div className="flex flex-row justify-center items-center gap-2">
            <IconButton onClick={navigate.bind(this, -1)}>
              <span className="-rotate-90">
                <Chevron />
              </span>
            </IconButton>
            <span>{title}</span>
          </div>
          <div className="text-base font-bold">{navbarActions}</div>
        </MainContainer>
      </AppBar>
      <main
        className={`pt-[64px]  h-[calc(100vh-135px)] ${
          buttonNavigation !== "off" && `pb-[100px]`
        }`}
      >
        {container === "off" ? (
          children
        ) : (
          <MainContainer className={`w-full flex justify-center gap-5 py-8`}>
            {children}
          </MainContainer>
        )}
      </main>
      {buttonNavigation !== "off" && <ButtomNavigation />} */}
      <AppBar
        className="!bg-white !shadow-none border-b border-gray-300 h-[65px] justify-center"
        position="fixed"
      >
        <MainContainer
          className={`flex flex-row justify-start gap-2 items-center`}
        >
          <IconButton onClick={navigate.bind(this, -1)}>
            <span className="-rotate-90">
              <Chevron />
            </span>
          </IconButton>
          <span>{title}</span>
        </MainContainer>
      </AppBar>
      <main className={`mt-[65px] h-[calc(100vh-135px)] overflow-y-auto`}>
        {container === "off" ? (
          children
        ) : (
          <MainContainer
            className={`w-full flex flex-col justify-center gap-8 py-8`}
          >
            {children}
          </MainContainer>
        )}
      </main>
      <ButtomNavigation inerrButtonNavigation={inerrButtonNavigation} />
    </>
  );
};

export default SingleLayoutMobile;
