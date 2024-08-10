import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import SkeletonSection from "../../../../components/skeleton_section";
import { ReactComponent as Chevron } from "../../../../assets/icons/chevron-down.svg";
import { useGetMyTrainingQuery } from "../../../../services/myCourseService";
import { LoadingSection } from "../../../../components/loading";

const CourseComponent = lazy(() => import("../CourseComponent"));

const MyTraining = () => {
  const trainingData = useGetMyTrainingQuery();

  return (
    <Suspense fallback={<LoadingSection />}>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-base text-gray-700">آموزش های من</span>
          <Link
            to={`/my-training`}
            className="text-sm flex gap-2 justify-center text-primary-60"
          >
            همه
            <span className="rotate-90">
              <Chevron />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {trainingData.status === "pending" ? (
            <SkeletonSection />
          ) : (
            trainingData?.data?.map((item) => <CourseComponent {...item} />)
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default MyTraining;
