import React from "react";
import { ReactComponent as Presentation } from "../../../assets/icons/presentation.svg";
import { ReactComponent as NotebookPen } from "../../../assets/icons/notebook-pen.svg";
import { ReactComponent as Check } from "../../../assets/icons/square-check-big.svg";
import { ReactComponent as File } from "../../../assets/icons/file.svg";
import { ReactComponent as NotebookText } from "../../../assets/icons/notebook-text.svg";
import { ReactComponent as SquarePlay } from "../../../assets/icons/square-play.svg";

const ActivityComponent = ({ title, type, date, time }) => {
  const getColor = () => {
    switch (type) {
      case "exam":
        return {
          icon: <Check />,
          bgColor: "bg-yellow-50",
          btnBgColor: "bg-yellow-200",
          textPrimaryColor: "text-yellow-700",
          textSecondaryColor: "text-yellow-600",
          ctaText: "شروع آزمون",
        };
      case "practice":
        return {
          icon: <NotebookPen />,
          bgColor: "bg-blue-50",
          btnBgColor: "bg-blue-200",
          textPrimaryColor: "text-blue-700",
          textSecondaryColor: "text-blue-600",
          ctaText: "ارسال تمرین",
        };
      case "blog":
        return {
          icon: <NotebookText />,
          bgColor: "bg-gray-50",
          btnBgColor: "bg-gray-200",
          textPrimaryColor: "text-gray-700",
          textSecondaryColor: "text-gray-600",
          ctaText: "خوندن مقاله",
        };
      case "video":
        return {
          icon: <SquarePlay />,
          bgColor: "bg-teal-50",
          btnBgColor: "bg-teal-200",
          textPrimaryColor: "text-teal-700",
          textSecondaryColor: "text-teal-600",
          ctaText: "دیدن ویدیو",
        };
      case "class":
        return {
          icon: <Presentation />,
          bgColor: "bg-green-50",
          btnBgColor: "bg-green-200",
          textPrimaryColor: "text-green-700",
          textSecondaryColor: "text-green-600",
          ctaText: "پیوستن کلاس",
        };
      case "file":
        return {
          icon: <File />,
          bgColor: "bg-red-50",
          btnBgColor: "bg-red-200",
          textPrimaryColor: "text-red-700",
          textSecondaryColor: "text-red-600",
          ctaText: "دانلود فایل",
        };
      default:
        return {
          icon: <Presentation />,
          bgColor: "bg-gray-100",
          btnBgColor: "bg-gray-200",
          textPrimaryColor: "text-gray-700",
          textSecondaryColor: "text-gray-600",
        }; // Default color if type is not matched
    }
  };
  const props = getColor();

  return (
    <div
      className={`flex justify-between items-cente ${props.bgColor} px-3 py-3 rounded-lg`}
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
            {date + " - " + time}
          </p>
        </div>
      </div>

      <button
        className={`${props.btnBgColor} ${props.textPrimaryColor} py-1 px-3 rounded-md text-xs line-clamp-1`}
      >
        {props.ctaText}
      </button>
    </div>
  );
};

export default ActivityComponent;
