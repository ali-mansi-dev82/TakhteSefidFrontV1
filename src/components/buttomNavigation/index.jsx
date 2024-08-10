import React from "react";

import { Link, useLocation } from "react-router-dom";
import items from "./items";
import { useSelector } from "react-redux";

const ButtomNavigation = ({ inerrButtonNavigation = null }) => {
  const location = useLocation();
  const { userInfo } = useSelector((redux) => redux.auth);

  return (
    <nav className="h-[70px] border-t border-gray-200 w-full inline-flex items-center justify-between">
      {inerrButtonNavigation ??
        (items[userInfo.role] &&
          items[userInfo.role].map((item) => (
            <Link
              to={item.link}
              className="flex flex-col items-center gap-1 w-1/4 text-gray-600"
            >
              <span
                className={`flex w-max h-7 ${
                  location.pathname === item.link &&
                  `bg-primary-0 text-primary-60`
                } px-4 py-1 rounded-full`}
              >
                {item.icon}
              </span>
              <span
                className={`text-gray-400 text-xs ${
                  location.pathname === item.link && `text-primary-60 font-bold`
                }`}
              >
                {item.title}
              </span>
            </Link>
          )))}
    </nav>
  );
};

export default React.memo(ButtomNavigation);
