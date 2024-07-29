import React from "react";
import { ReactComponent as Presentation } from "../../../assets/icons/presentation.svg";

const ActivityComponent = ({ title, type, date, time }) => {
  const getColor = () => {
    switch (type) {
      case "exam":
        return {
          icon: <Presentation />,
          bgColor: "bg-yellow-100",
          btnBgColor: "bg-yellow-200",
          textPrimaryColor: "text-yellow-700",
          textSecondaryColor: "text-yellow-600",
        };
      case "practice":
        return {
          icon: <Presentation />,
          bgColor: "bg-blue-100",
          btnBgColor: "bg-blue-200",
          textPrimaryColor: "text-blue-700",
          textSecondaryColor: "text-blue-600",
        };
      case "class":
        return {
          icon: <Presentation />,
          bgColor: "bg-green-100",
          btnBgColor: "bg-green-200",
          textPrimaryColor: "text-green-700",
          textSecondaryColor: "text-green-600",
        };
      default:
        return "bg-white"; // Default color if type is not matched
    }
  };
  const props = getColor();

  return (
    <div
      className={`flex justify-between items-cente ${props.bgColor} px-3 py-3 rounded-lg`}
    >
      <div className="flex flex-row gap-3 items-center">
        <span
          className={`flex w-9 h-w-9 ${props.btnBgColor} p-2 ${props.textPrimaryColor} rounded-full`}
        >
          {props.icon}
        </span>
        <div className="flex flex-col gap-1 line-clamp-1">
          <p className={`text-sm ${props.textPrimaryColor} font-semibold line-clamp-1`}>
            {title}
          </p>
          <p className={`text-xs ${props.textSecondaryColor} YekanBakhFaNum line-clamp-1`}>
            {date + " - " + time}
          </p>
        </div>
      </div>

      <button
        className={`${props.btnBgColor} ${props.textPrimaryColor} py-1 px-3 rounded-md text-xs line-clamp-1`}
      >
        شروع آزمون
      </button>
    </div>
  );
};

export default ActivityComponent;
