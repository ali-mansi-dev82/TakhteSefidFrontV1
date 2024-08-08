import React from "react";
import { Link } from "react-router-dom";

import SkeletonSection from "../../../../components/skeleton_section";
import { ReactComponent as Chevron } from "../../../../assets/icons/chevron-down.svg";
import { useGetMyCourseQuery } from "../../../../services/attendCourseService";
import CourseComponent from "../CourseComponent";

const MyLearning = () => {
  const courseData = useGetMyCourseQuery();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-base text-gray-700">
          درس های من (اخیرا مراجعه شده)
        </span>
        <Link
          to={`/my-learning`}
          className="text-sm flex gap-2 justify-center text-primary-60"
        >
          همه
          <span className="rotate-90">
            <Chevron />
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {courseData.status === "pending" ? (
          <SkeletonSection />
        ) : (
          courseData?.data?.map((item) => <CourseComponent {...item} />)
        )}
      </div>
    </div>
  );
};

export default MyLearning;
