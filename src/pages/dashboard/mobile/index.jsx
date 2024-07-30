import React from "react";
import InitialLayoutMobile from "../../../layouts/mobile/initial_layout";
import ActivityComponent from "./ActivityComponent";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron-down.svg";
import { Link } from "react-router-dom";
import CourseComponent from "./CourseComponent";

const days = [
  { text: "شنبه", num: 23 },
  { text: "یک", num: 24 },
  { text: "دو", num: 25 },
  { text: "سه", num: 26 },
  { text: "چهار", num: 27 },
  { text: "پنج", num: 28 },
  { text: "جمعـ", num: 29 },
];

const activities = [
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
];

const Mobile = () => {
  return (
    <InitialLayoutMobile>
      <div className="flex flex-col w-full gap-6">
        <div className="text-base text-primary-60 font-semibold">
          خوش اومدی، علی جان! <span className="text-2xl"> 👋 </span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-700">تقویم</span>
            <Link
              to={`#`}
              className="text-sm flex gap-2 justify-center text-primary-60"
            >
              همه
              <span className="rotate-90">
                <Chevron />
              </span>
            </Link>
          </div>
          <div className="flex justify-between">
            {days.map((item) => (
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500">{item.text}</span>
                <span
                  className={`inline-flex flex-col w-8 h-8 items-center justify-center text-xs text-gray-700 YekanBakhFaNum font-semibold rounded-full ${
                    item.num === 27 && `bg-primary-70 text-white font-normal`
                  }`}
                >
                  {item.num}
                  <span className="w-[5px] h-[5px] bg-yellow-400 rounded"></span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4">
          {activities.map((item) => (
            <ActivityComponent {...item} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-700">
              درس های من (اخیرا مراجعه شده)
            </span>
            <Link
              to={`#`}
              className="text-sm flex gap-2 justify-center text-primary-60"
            >
              همه
              <span className="rotate-90">
                <Chevron />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
          </div>
        </div>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
