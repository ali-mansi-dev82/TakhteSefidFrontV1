import React from "react";

import InitialLayoutMobile from "../../layouts/mobile/initial_layout";
import { ReactComponent as PageNotFound } from "../../assets/illustration/page_not_found.svg";

const Mobile = () => {
  return (
    <InitialLayoutMobile>
      <div className="">
        <div className="flex flex-col justify-center items-center gap-6">
          <PageNotFound />
          <p className="text-sm text-gray-500">صفحه مورد نظر یافت نشد !!</p>
        </div>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
