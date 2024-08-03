import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";

import { ReactComponent as Chevrow } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Learning } from "../../assets/icons/learning.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as NotebookPen } from "../../assets/icons/notebook-pen.svg";
import { ReactComponent as Check } from "../../assets/icons/square-check-big.svg";
import { ReactComponent as Logout } from "../../assets/icons/log-out.svg";
import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import { log_out } from "../../features/auth/authSlice";

const Mobile = ({ log_out }) => {
  const { userInfo } = useSelector((redux) => redux.auth);
  return (
    <InitialLayoutMobile title="پنل من">
      <ul className="flex flex-col gap-2">
        <Link
          to={`/edit-my-info`}
          className="w-full inline-flex justify-between py-4"
        >
          <div className="inline-flex gap-2 items-center justify-center">
            <span className="inline-flex w-[42px] h-[42px] p-[10px] bg-gray-100 rounded-full">
              <User />
            </span>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-sm text-gray-700">
                {userInfo?.fullname || "کاربر تخته سفید"}
              </span>
              <span className="text-xs text-gray-400 YekanBakhFaNum">
                {userInfo?.mobile || userInfo?.email}
              </span>
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </Link>
        <hr />
        <Link
          to={`/my-learning`}
          className="w-full inline-flex justify-between py-4"
        >
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex w-6 h-6">
              <Learning />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">
                درس های در حال یادگیری
              </span>
              {/* <span className="text-xs text-gray-400 YekanBakhFaNum">
                {userInfo?.mobile}
              </span> */}
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </Link>
        <Link
          to={`/calendar`}
          className="w-full inline-flex justify-between py-4"
        >
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex w-6 h-6">
              <Calendar />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">تقویم</span>
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </Link>
        <Link className="w-full inline-flex justify-between py-4">
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex w-6 h-6 p-[1px]">
              <NotebookPen />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">تکالیف</span>
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </Link>
        <Link className="w-full inline-flex justify-between py-4">
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex w-6 h-6 p-[1px]">
              <Check />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">آزمونها</span>
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </Link>
        <hr />
        <li
          className="w-full inline-flex justify-between py-4 cursor-pointer"
          onClick={log_out}
        >
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex w-6 h-6 p-[1px]">
              <Logout />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">خروج از حساب کاربری</span>
            </div>
          </div>
          <span className="rotate-90 text-gray-400">
            <Chevrow />
          </span>
        </li>
      </ul>
    </InitialLayoutMobile>
  );
};

// export default Mobile;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_out }, dispatch);

export default connect(null, mapDispatchToProps)(Mobile);
