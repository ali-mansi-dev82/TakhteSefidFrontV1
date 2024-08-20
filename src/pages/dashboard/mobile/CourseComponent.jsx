import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

import { ReactComponent as ImageOff } from "../../../assets/icons/image-off.svg";
import { ReactComponent as User } from "../../../assets/icons/user.svg";
import AvatarGroupWithImage from "../../../components/avatar_group";

const CourseComponent = ({
  course: { _id, title, image, teacher },
  attendees,
}) => {
  return (
    <Link to={`/course/${_id}`} className="border border-gray-200 rounded-lg">
      <div className="grid grid-cols-[110px_auto] gap-4 p-4 h-max">
        <div className="relative w-[110px] h-[110px] rounded-lg overflow-hidden">
          {!image ? (
            <div className="w-[110px] h-[110px] flex items-center justify-center bg-gray-100">
              <span className="flex w-7 h-7 text-gray-400">
                <ImageOff />
              </span>
            </div>
          ) : (
            <img
              loading="lazy"
              src={image}
              alt=""
              className="w-[110px] h-[110px] object-cover border border-gray-100 rounded-xl"
            />
          )}{" "}
        </div>

        <div className="flex flex-col w-full h-full items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h6 className="text-base font-bold text-gray-600 justify-items-stretch line-clamp-1">
              {title}
            </h6>
            <div className="flex flex-row gap-1 items-center text-xs text-gray-400 line-clamp-1">
              <span className="flex w-4 h-4 text-gray-300">
                <User />
              </span>
              {teacher?.fullname}
            </div>
          </div>
          <AvatarGroupWithImage count={attendees} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <LinearProgress
          variant="determinate"
          value={0}
          sx={{ height: 10, borderRadius: 10 }}
        />
      </div>
    </Link>
  );
};
export default React.memo(CourseComponent);
