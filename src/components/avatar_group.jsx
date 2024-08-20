import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const AvatarGroupWithImage = ({ count }) => {
  return (
    <div className="flex flex-row gap-2 items-center mt-2">
      <AvatarGroup max={4}>
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Remy Sharp"
          src="http://127.0.0.1:3500/public/avatar.webp"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Travis Howard"
          src="http://127.0.0.1:3500/public/avatar.webp"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Cindy Baker"
          src="http://127.0.0.1:3500/public/avatar.webp"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Agnes Walker"
          src="http://127.0.0.1:3500/public/avatar.webp"
        />
      </AvatarGroup>
      <span className="text-xs text-gray-400 line-clamp-1">
        {count} دانشجوی
      </span>
    </div>
  );
};

export default React.memo(AvatarGroupWithImage);
