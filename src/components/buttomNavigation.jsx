import React from "react";
import { ReactComponent as Dashboard } from "../assets/icons/dashboard.svg";
import { ReactComponent as Learning } from "../assets/icons/learning.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { Link, useLocation } from "react-router-dom";

const items = [
  { title: "داشبورد", icon: <Dashboard />, link: `/dashboard` },
  {
    title: "یادگیری من",
    icon: <Learning />,
    link: `/my-learning`,
  },
  { title: "تقویم", icon: <Calendar />, link: `/calendar` },
  { title: "پنل من", icon: <User />, link: `/my-panel` },
];
const ButtomNavigation = () => {
  const location = useLocation();
  return (
    <nav className="h-[70px] border-t border-gray-200 w-full inline-flex items-center justify-between">
      {items.map((item) => (
        <Link
          to={item.link}
          className="flex flex-col items-center gap-1 w-1/4 text-gray-600"
        >
          <span
            className={`flex w-max h-7 ${
              location.pathname === item.link && `bg-primary-0 text-primary-60`
            } px-4 py-1 rounded-full`}
          >
            {item.icon}
          </span>
          <span
            className={`text-gray-400 text-xs ${
              item.active && `text-primary-60`
            }`}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default ButtomNavigation;
