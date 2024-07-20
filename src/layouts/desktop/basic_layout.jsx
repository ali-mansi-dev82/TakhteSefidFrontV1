import React from "react";

import Navbar from "../../modules/auth/navbar/desktop/index";
import MainContainer from "../../components/container";

const BasicLayoutDesktop = ({
  children,
  containerClass,
  container,
  searchText = "",
}) => {
  return (
    <>
      <Navbar searchText={searchText} />
      <main className=" pt-[65px]">
        {container === "off" ? (
          children
        ) : (
          <MainContainer
            className={`w-full flex justify-center gap-5 py-12 ${containerClass}`}
          >
            {children}
          </MainContainer>
        )}
      </main>
    </>
  );
};

export default BasicLayoutDesktop;
