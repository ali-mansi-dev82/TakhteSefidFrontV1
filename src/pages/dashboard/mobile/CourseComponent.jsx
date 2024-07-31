import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

import { ReactComponent as User } from "../../../assets/icons/user.svg";
import avatar from "../../../assets/images/avatar.jpg";
import image from "../../../assets/images/track.png";

const CourseComponent = () => {
  return (
    <Link to={`/course/callld`} className="border border-gray-200 rounded-lg">
      <div className="flex flex-row gap-4 p-4 h-max">
        <img
          src={image}
          alt=""
          className="w-[110px] h-[110px] object-cover border border-gray-100 rounded-xl"
        />
        <div className="flex flex-col w-full h-full items-start justify-between gap-7">
          <div className="flex flex-col gap-3">
            <h6 className="text-base font-bold text-gray-600 justify-items-stretch line-clamp-1">
              طراحی رابط کاربری
            </h6>
            <div className="flex flex-row gap-1 items-center text-xs text-gray-400 line-clamp-1">
              <span className="flex w-4 h-4 text-gray-300">
                <User />
              </span>
              محمد علوی
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <AvatarGroup max={4}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src={avatar}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src={avatar}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Cindy Baker"
                src={avatar}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Agnes Walker"
                src={avatar}
              />
            </AvatarGroup>
            <span className="text-xs text-gray-300 line-clamp-1">
              ۵۰+ دانشجوی دوره
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <LinearProgress
          variant="determinate"
          value={20}
          sx={{ height: 10, borderRadius: 10 }}
        />
      </div>
    </Link>
  );
};

export default CourseComponent;
