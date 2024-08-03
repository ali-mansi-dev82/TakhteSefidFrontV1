import { Avatar, AvatarGroup, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import React from "react";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import CircularProgressWithLabel from "./components/circleProgressWithLabel";
import avatar from "../../assets/images/avatar.jpg";
import SectionComponent from "./components/sectionComponent";
import MainContainer from "../../components/container";
import { useGetCourseDetailQuery } from "../../services/courseService";

const Mobile = () => {
  const { id } = useParams();
  const { data } = useGetCourseDetailQuery(id);

  return (
    <InitialLayoutMobile
      title={data?.data?.title || <Skeleton height={25} />}
      container="off"
      key={id}
    >
      {data?.data?.image ? (
        <img
          loading="lazy"
          src={data?.data?.image}
          alt=""
          className="w-full h-[250px] border-b border-gray-200 object-cover"
        />
      ) : (
        <Skeleton height={250} />
      )}

      <MainContainer className="py-5">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-gray-700">
            {data?.data?.title || <Skeleton height={65} />}
          </div>
          <div className="text-sm text-gray-400">
            {data?.data?.teacher?.fullname || <Skeleton height={65} />}
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
            <span className="text-xs text-gray-400 line-clamp-1">
              {data?.attendes} دانشجوی
            </span>
          </div>
          <p className="text-sm leading-7 text-gray-400">
            {data?.data?.description || <Skeleton height={65} />}
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
