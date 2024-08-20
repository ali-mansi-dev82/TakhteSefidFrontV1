import { Link, useParams } from "react-router-dom";
import { Button, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";

import { ReactComponent as ImageOff } from "../../assets/icons/image-off.svg";
import { ReactComponent as Setting } from "../../assets/icons/settings-2.svg";
import CircularProgressWithLabel from "./components/circleProgressWithLabel";
import { useGetCourseDetailQuery } from "../../services/courseService";
import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import AvatarGroupWithImage from "../../components/avatar_group";
import SectionComponent from "./components/sectionComponent";
import MainContainer from "../../components/container";

const Mobile = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCourseDetailQuery(id);
  const { userInfo } = useSelector((redux) => redux.auth);

  return (
    <InitialLayoutMobile
      title={data?.data?.title || <Skeleton height={25} />}
      container="off"
      key={id}
      inerrButtonNavigation={
        data?.data?.teacher?._id === userInfo?._id ? (
          <div className="w-full px-4">
            <Link to={`/manage_course/${data?.data?._id}`}>
              <Button
                variant="contained"
                fullWidth
                size="medium"
                startIcon={
                  <span className="flex w-4 h-4">
                    <Setting />
                  </span>
                }
              >
                مدیریت دوره
              </Button>
            </Link>
          </div>
        ) : null
      }
    >
      {isLoading ? (
        <Skeleton height={250} />
      ) : (
        <div className="w-full h-[250px] border-b overflow-hidden">
          {!data?.data?.image ? (
            <div className="w-full h-[250px] flex items-center justify-center bg-gray-100">
              <span className="flex w-7 h-7 text-gray-400">
                <ImageOff />
              </span>
            </div>
          ) : (
            <img
              loading="lazy"
              src={data?.data?.image}
              alt=""
              className="w-full h-[250px] border-b border-gray-200 object-cover"
            />
          )}{" "}
        </div>
      )}

      <MainContainer className="py-5">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-gray-700">
            {isLoading ? <Skeleton height={65} /> : data?.data?.title}
          </div>
          <div className="text-sm text-gray-400">
            {isLoading ? (
              <Skeleton height={65} />
            ) : (
              data?.data?.teacher?.fullname
            )}
          </div>
          {isLoading ? <Skeleton height={65} /> : <AvatarGroupWithImage count={data?.attendes} />}
          <p className="text-sm leading-7 text-gray-400">
            {isLoading ? <Skeleton height={65} /> : data?.data?.description}
          </p>
          {data?.data?.sections && data?.data?.sections?.length > 0 ? (
            <ul className="flex flex-col border border-gray-300 justify-center rounded-xl overflow-hidden">
              <li className="inline-flex justify-between items-center px-3 py-2 bg-gray-100 ">
                <span className="text-sm text-primary-60 font-bold">
                  سرفصل ها
                </span>
                <CircularProgressWithLabel variant="determinate" value={50} />
              </li>
              {data?.data?.sections?.map((item) => (
                <SectionComponent {...item} />
              ))}
            </ul>
          ) : (
            <div className=" py-6 text-center text-sm text-gray-500">
              سرفصلی وجود ندارد !!!
            </div>
          )}
        </div>
      </MainContainer>
    </InitialLayoutMobile>
  );
};

export default Mobile;
