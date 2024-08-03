import React from "react";

import { ReactComponent as NotebookText } from "../../../assets/icons/notebook-text.svg";
import { ReactComponent as Presentation } from "../../../assets/icons/presentation.svg";
import { ReactComponent as NotebookPen } from "../../../assets/icons/notebook-pen.svg";
import { ReactComponent as Check } from "../../../assets/icons/square-check-big.svg";
import { ReactComponent as SquarePlay } from "../../../assets/icons/square-play.svg";
import { ReactComponent as File } from "../../../assets/icons/file.svg";
import { dateFormate } from "../../../utils/dateFormat";

const ActivityComponent = ({ title, type, start }) => {
  const getColor = () => {
    switch (type) {
      case "exam":
        return {
          icon: <Check />,
          bgColor: "bg-yellow-50",
          btnBgColor: "bg-yellow-100",
          textPrimaryColor: "text-yellow-700",
          textSecondaryColor: "text-yellow-600",
          ctaText: "شروع",
        };
      case "practice":
        return {
          icon: <NotebookPen />,
          bgColor: "bg-blue-50",
          btnBgColor: "bg-blue-100",
          textPrimaryColor: "text-blue-700",
          textSecondaryColor: "text-blue-600",
          ctaText: "ارسال",
        };
      case "blog":
        return {
          icon: <NotebookText />,
          btnBgColor: "bg-gray-100",
          textPrimaryColor: "text-gray-700",
          textSecondaryColor: "text-gray-600",
          ctaText: "خوندن",
        };
      case "video":
        return {
          icon: <SquarePlay />,
          btnBgColor: "bg-teal-100",
          textPrimaryColor: "text-teal-700",
          textSecondaryColor: "text-teal-600",
          ctaText: "دیدن",
        };
      case "class":
        return {
          icon: <Presentation />,
          btnBgColor: "bg-green-100",
          textPrimaryColor: "text-green-700",
          textSecondaryColor: "text-green-600",
          ctaText: "پیوستن",
        };
      case "file":
        return {
          icon: <File />,
          btnBgColor: "bg-red-100",
          textPrimaryColor: "text-red-700",
          textSecondaryColor: "text-red-600",
          ctaText: "دانلود",
        };
      default:
        return {
          icon: <Presentation />,
          btnBgColor: "bg-gray-100",
          textPrimaryColor: "text-gray-700",
          textSecondaryColor: "text-gray-600",
        }; // Default color if type is not matched
    }
  };
  const props = getColor();

  return (
    <li
      className={`flex justify-between items-cente bg-white px-3 py-3  border-b border-gray-300 last:border-b-0`}
    >
      <div className="flex flex-row gap-3 items-center">
        <span
          className={`flex w-9 h-9 ${props.btnBgColor} p-[9px] ${props.textPrimaryColor} rounded-full`}
        >
          {props.icon}
        </span>
        <div className="flex flex-col gap-1 line-clamp-1">
          <p
            className={`text-sm ${props.textPrimaryColor} font-semibold line-clamp-1`}
          >
            {title}
          </p>
          <p
            className={`text-xs ${props.textSecondaryColor} YekanBakhFaNum line-clamp-1`}
          >
            {dateFormate(start)}
          </p>
        </div>
      </div>

      <button
        className={`${props.btnBgColor} ${props.textPrimaryColor} py-1 px-3 rounded-md text-xs line-clamp-1`}
      >
        {props.ctaText}
      </button>
    </li>
  );
};

export default ActivityComponent;
