import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
    </div>
  );
};

export default SkeletonSection;
