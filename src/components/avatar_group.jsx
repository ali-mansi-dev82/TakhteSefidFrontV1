import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

import avatar from "../assets/images/avatar.jpg";

const AvatarGroupWithImage = () => {
  return (
    <div className="flex flex-row gap-2 items-center mt-2">
      <AvatarGroup max={4}>
        <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={avatar} />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Travis Howard"
          src={avatar}
        />
        <Avatar sx={{ width: 24, height: 24 }} alt="Cindy Baker" src={avatar} />
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
  );
};

export default AvatarGroupWithImage;
