import React from "react";
import {
  Button,
} from "@mui/material";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import MainContainer from "../../../components/container";
import Footer from "../../../modules/auth/footer";
import Faqs from "../shared/faqs";

const Desktop = () => {
  return (
    <BasicLayoutDesktop container="off">
      <div className="flex flex-col gap-12 py-8">
        <MainContainer className="flex flex-col gap-16 !px-40">
          <div className="flex flex-row justify-between items-center ">
            <div className="flex flex-col items-start gap-6 pt-20">
              <div className="text-gray-600 text-3xl font-semibold">
                سامانه مدیریت یادگیری تخته سفید
              </div>
              <div className="text-gray-400 text-lg font-medium">
                همین حالا به تخته سفید بپیوندید
              </div>
              <div className="flex gap-4 mt-10">
                <Button
                  variant="contained"
                  size="large"
                  className="!py-[10px] !px-8"
                >
                  تست رایگان
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="!py-[10px] !px-8"
                >
                  خرید سرویس
                </Button>
              </div>
            </div>
            <img
              src="http://127.0.0.1:3500/public/girl.webp"
              loading="lazy"
              alt="girl"
              className="w-[400px]"
            />
          </div>
          <div className="bg-gray-100  flex flex-row gap-44 justify-center items-center p-5 rounded-2xl">
            <div className="flex items-center flex-col gap-2">
              <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                +10
              </span>
              <span className="text-gray-400 text-sm font-extralight">
                رویداد برگزار شده
              </span>
            </div>
            <div className="flex items-center flex-col gap-2">
              <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                +236
              </span>
              <span className="text-gray-400 text-sm font-extralight">
                شرکت کننده
              </span>
            </div>
            <div className="flex items-center flex-col gap-2">
              <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                +20
              </span>
              <span className="text-gray-400 text-sm font-extralight">
                برگزار کننده
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-6">
            <div className="text-lg text-gray-400">
              همراهانی که به تخته سفید اعتماد کردند
            </div>
            <div className="w-full flex justify-between">
              <img
                src="http://127.0.0.1:3500/public/educ_partner.webp"
                loading="lazy"
                alt="co_partner1"
              />
              <img
                src="http://127.0.0.1:3500/public/fani_partner.webp"
                loading="lazy"
                alt="co_partner2"
              />
              <img
                src="http://127.0.0.1:3500/public/jahad_partner.webp"
                loading="lazy"
                alt="co_partner3"
              />
              <img
                src="http://127.0.0.1:3500/public/zob_partner.webp"
                loading="lazy"
                alt="co_partner4"
              />
              <img
                src="http://127.0.0.1:3500/public/educ_partner.webp.webp"
                loading="lazy"
                alt="co_partner1"
              />
              <img
                src="http://127.0.0.1:3500/public/jahad_partner.webp"
                loading="lazy"
                alt="co_partner3"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  امکان برگزاری آزمون آنلاین
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/exam.webp"
                alt=""
                className="w-[500px]"
              />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/online_class.webp"
                alt=""
                className="w-[500px]"
              />
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  کلاس های آنلاین و حضور و غیاب
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">حضور و غیاب در کلاس</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  بارگذاری تکالیف و ثبت نمرات
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/practise.webp"
                alt=""
                className="w-[500px]"
              />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/chat.webp"
                alt=""
                className="w-[500px]"
              />
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  امکان چت با همکلاسی ها و اساتید
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  امکان برگزاری جلسات آنلاین
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/meet.webp"
                alt=""
                className="w-[500px]"
              />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/track.webp"
                alt=""
                className="w-[500px]"
              />
              <div className="">
                <span className="font-bold text-2xl text-gray-600">
                  امکان شخصی سازی
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-8 font-extralight text-base">
                  <li className="check-list-bullet">دامین اختصاصی</li>
                  <li className="check-list-bullet">سرور اختصاصی </li>
                  <li className="check-list-bullet">رنگ و لوگوی اختصاصی</li>
                </ul>
              </div>
            </div>
          </div>
          <Faqs />
          <div className="">
            <div className="flex flex-row items-center justify-between gap-3 bg-primary-0 py-8 px-20 rounded-xl">
              <div className="flex flex-col gap-3">
                <div className="text-lg text-primary-90 font-bold">
                  سامانه مدیریت یادگیری تخته سفید
                </div>
                <div className="text-sm text-primary-50">
                  همین حالا به خانواده تخته سفید بپیوندید
                </div>
              </div>
              <Button variant="contained" size="medium">
                ثبت نام رایگان
              </Button>
            </div>
          </div>
        </MainContainer>
        <Footer />
      </div>
    </BasicLayoutDesktop>
  );
};

export default Desktop;
