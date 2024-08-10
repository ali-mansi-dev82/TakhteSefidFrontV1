import React from "react";
import { Link } from "react-router-dom";

const GeneralTab = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col">
        <div className="text-base mb-[14px]">کاربران</div>
        <ul className="flex flex-col text-primary-default">
          <Link className="py-[10px] text-sm " to={`/d`}>
            کاربر جدید
          </Link>
          <Link className="py-[10px] text-sm" to={`/d`}>
            لیست کاربران
          </Link>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="text-base mb-[14px]">دوره ها</div>
        <ul className="flex flex-col text-primary-default">
          <Link className="py-[10px] text-sm" to={`/d`}>
            دوره جدید
          </Link>
          <Link className="py-[10px] text-sm" to={`/d`}>
            لیست دوره ها
          </Link>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="text-base mb-[14px]">گزارشات</div>
        <ul className="flex flex-col text-primary-default">
          <Link className="py-[10px] text-sm" to={`/d`}>
            دوره جدید
          </Link>
          <Link className="py-[10px] text-sm" to={`/d`}>
            لیست دوره ها
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default GeneralTab;
