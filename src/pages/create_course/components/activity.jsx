import { bindActionCreators } from "@reduxjs/toolkit";
import { Menu, MenuItem } from "@mui/material";
import { connect } from "react-redux";
import React from "react";

import {
  updateActivityTitle,
  deleteActivity,
} from "../../../features/course/createCourseSlice";
import { ReactComponent as EllipsisVertical } from "../../../assets/icons/ellipsis-vertical.svg";
import { ReactComponent as NotebookText } from "../../../assets/icons/notebook-text.svg";
import { ReactComponent as Presentation } from "../../../assets/icons/presentation.svg";
import { ReactComponent as NotebookPen } from "../../../assets/icons/notebook-pen.svg";
import { ReactComponent as Check } from "../../../assets/icons/square-check-big.svg";
import { ReactComponent as SquarePlay } from "../../../assets/icons/square-play.svg";
import { ReactComponent as Trash } from "../../../assets/icons/trash.svg";
import { ReactComponent as File } from "../../../assets/icons/file.svg";
import EditableInput from "../../../components/editable_input";
import useDisclosure from "../../../hooks/useDisclosure";

const ActivityComponent = ({
  id,
  title,
  type,
  date,
  time,
  sectionId,
  deleteActivity,
  updateActivityTitle,
}) => {
  const [isMenuOpen, openMenu, closeMenu] = useDisclosure(false);
  const anchorRef = React.useRef(null);

  const getColor = () => {
    switch (type) {
      case "exam":
        return {
          icon: <Check />,
          bgColor: "bg-yellow-50",
          btnBgColor: "bg-yellow-100",
          textPrimaryColor: "text-yellow-700",
          textSecondaryColor: "text-yellow-600",
          ctaText: "شروع آزمون",
        };
      case "practice":
        return {
          icon: <NotebookPen />,
          bgColor: "bg-blue-50",
          btnBgColor: "bg-blue-100",
          textPrimaryColor: "text-blue-700",
          textSecondaryColor: "text-blue-600",
          ctaText: "ارسال تمرین",
        };
      case "blog":
        return {
          icon: <NotebookText />,
          btnBgColor: "bg-gray-100",
          textPrimaryColor: "text-gray-700",
          textSecondaryColor: "text-gray-600",
          ctaText: "خوندن مقاله",
        };
      case "video":
        return {
          icon: <SquarePlay />,
          btnBgColor: "bg-teal-100",
          textPrimaryColor: "text-teal-700",
          textSecondaryColor: "text-teal-600",
          ctaText: "دیدن ویدیو",
        };
      case "class":
        return {
          icon: <Presentation />,
          btnBgColor: "bg-green-100",
          textPrimaryColor: "text-green-700",
          textSecondaryColor: "text-green-600",
          ctaText: "پیوستن کلاس",
        };
      case "file":
        return {
          icon: <File />,
          btnBgColor: "bg-red-100",
          textPrimaryColor: "text-red-700",
          textSecondaryColor: "text-red-600",
          ctaText: "دانلود فایل",
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
          className={`flex w-9 h-9 ${props.btnBgColor} ${props.textPrimaryColor} p-[9px] rounded-full`}
        >
          {props.icon}
        </span>
        <div className="flex flex-col gap-1 line-clamp-1">
          <EditableInput
            labelClass={`text-sm ${props.textPrimaryColor} font-semibold line-clamp-1`}
            value={title}
            setValue={(value) => {
              updateActivityTitle({
                sectionId,
                activityId: id,
                newTitle: value,
              });
            }}
          />
          {/* <p
            className={`text-xs ${props.textSecondaryColor} YekanBakhFaNum line-clamp-1`}
          >
            {date + " - " + time}
          </p> */}
        </div>
      </div>
      <div className="inline-flex gap-2">
        <button
          type="button"
          ref={anchorRef}
          onClick={openMenu}
          className="inline-flex w-8 h-8 items-center justify-center hover:bg-primary-0 text-primary-60 rounded-full"
        >
          <span className="inline-flex w-4">
            <EllipsisVertical />
          </span>
        </button>
        <Menu
          id="basic-menu"
          open={isMenuOpen}
          anchorEl={anchorRef.current}
          onClose={closeMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={deleteActivity.bind(this, { sectionId, activityId: id })}
          >
            <div className="inline-flex gap-2 items-center h-4 text-red-700 text-base">
              <Trash />
              حذف
            </div>
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteActivity, updateActivityTitle }, dispatch);
export default connect(null, mapDispatchToProps)(ActivityComponent);
