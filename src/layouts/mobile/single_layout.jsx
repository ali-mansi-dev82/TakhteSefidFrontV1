import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

// import ButtonNavigation from "../../modules/auth/components/button_navigation/button_navigaton";
import MainContainer from "../../components/container";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-down.svg";

const SingleLayoutMobile = ({
  children,
  title = "",
  navbarActions,
  buttonNavigation,
  container,
  // buttonNavigationSelected,
}) => {
  let navigate = useNavigate();

  return (
    <>
      <AppBar
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
        className={`pt-[64px] ${buttonNavigation !== "off" && `pb-[100px]`}`}
      >
        {container === "off" ? (
          children
        ) : (
          <MainContainer className={`w-full flex justify-center gap-5 py-8`}>
            {children}
          </MainContainer>
        )}
      </main>
      {/* {buttonNavigation !== "off" && (
        <ButtonNavigation
          buttonNavigation={buttonNavigation}
          selected={buttonNavigationSelected}
        />
      )} */}
    </>
  );
};

export default SingleLayoutMobile;
