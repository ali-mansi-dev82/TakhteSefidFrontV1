import { Avatar, AvatarGroup } from "@mui/material";
import { useParams } from "react-router-dom";
import React from "react";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import CircularProgressWithLabel from "./components/circleProgressWithLabel";
import avatar from "../../assets/images/avatar.jpg";
import image from "../../assets/image 1.png";
import SectionComponent from "./components/sectionComponent";
import MainContainer from "../../components/container";

const Mobile = () => {
  const { id } = useParams();
  const section = [
    {
      title: "مقدمه",
      activity: [
        {
          type: "exam",
          title: "امتحان فتوشاپ",
          date: "10 فروردین 1403",
          time: "14:30",
        },
        {
          type: "practice",
          title: "انجام تکلیف طراحی گرافیک",
          date: "11 فروردین 1403",
          time: "14:30",
        },
        {
          type: "class",
          title: "طراحی گرافیک",
          date: "14 فروردین 1403",
          time: "14:30",
        },
      ],
    },
    {
      title: "فصل 1",
      activity: [
        {
          type: "file",
          title: "طراحی گرافیک",
          date: "14 فروردین 1403",
          time: "14:30",
        },
        {
          type: "blog",
          title: "طراحی گرافیک",
          date: "14 فروردین 1403",
          time: "14:30",
        },
        {
          type: "video",
          title: "طراحی گرافیک",
          date: "14 فروردین 1403",
          time: "14:30",
        },
      ],
    },
  ];

  return (
    <InitialLayoutMobile title="طراحی رابط کاربری" container="off" key={id}>
      <img src={image} alt="" className="w-full border-b border-gray-200" />
      <MainContainer className='py-5'>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-gray-700">
            طراحی رابط کاربری
          </div>
          <div className="text-sm text-gray-400">حسن نریمانی</div>
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
          <p className="text-sm leading-7 text-gray-400">
            تیبا مدل 96 خونگی و عالی از صفر دستم بوده چند لکه رنگ داره که
            مالیدگی هست شاسی ضربه جزیی دارد و به عنوان دور رنگ میفروشم که حرف
            توش نباشه فقط به مصرف کننده میدم قیمتشم عالی و زیر قیمت زدم
          </p>
          <ul className="flex flex-col border border-gray-300 justify-center rounded-xl overflow-hidden">
            <li className="inline-flex justify-between items-center px-3 py-2 bg-gray-100 ">
              <span className="text-base text-primary-60">سرفصل ها</span>
              <CircularProgressWithLabel variant="determinate" value={50} />
            </li>
            {section.map((item) => (
              <SectionComponent {...item} />
            ))}
          </ul>
        </div>
      </MainContainer>
    </InitialLayoutMobile>
  );
};

export default Mobile;
