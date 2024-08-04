import React from "react";

import SingleLayoutMobile from "../../layouts/mobile/single_layout";
import { ReactComponent as PageNotFound } from "../../assets/illustration/page_not_found.svg";

const Mobile = () => {
  return (
    <SingleLayoutMobile title="404">
      <div className="">
        <div className="flex flex-col justify-center items-center gap-6">
          <PageNotFound />
          <p className="text-sm text-gray-500">صفحه مورد نظر یافت نشد !!</p>
        </div>
      </div>
    </SingleLayoutMobile>
  );
};

export default Mobile;
