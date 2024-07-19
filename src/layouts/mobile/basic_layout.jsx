import React from "react";

import Navbar from "../../modules/auth/navbar/mobile/index";
import MainContainer from "../../components/container";

const BasicLayoutMobile = ({
  children,
  containerClass,
  searchText,
  filter = [],
}) => {
  return (
    <>
      <Navbar searchText={searchText} />
      <main
        className={`${
          filter?.length > 0 ? `mt-[122px]` : `mt-[55px]`
        } mb-[65px] ${containerClass}`}
      >
        {filter?.length > 0 && (
          <div className="fixed top-[72px] right-0 left-0 flex flex-row gap-2 border-b border-gray-300 px-3 py-2 bg-white z-40">
            {filter?.map((value, index) => (
              <span
                key={index}
                className=" flex flex-row gap-2 items-center justify-center border border-primary-default text-primary-default w-max h-max text-xs px-3 py-2 rounded-full"
              >
                {value.key}: {value.value}
              </span>
            ))}
          </div>
        )}
        <MainContainer
          className={`w-full flex flex-col justify-center gap-8 py-8 `}
        >
          {children}
        </MainContainer>
      </main>
      {/* <ButtonNavigation /> */}
    </>
  );
};

export default BasicLayoutMobile;