import React from "react";
import { Button } from "@mui/material";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import MainContainer from "../../../components/container";
import Footer from "../../../modules/auth/footer";
import Faqs from "../shared/faqs";

const Mobile = () => {
  return (
    <BasicLayoutMobile container="off">
      <div className="flex flex-col gap-12">
        <MainContainer className="flex flex-col gap-12 py-6">
          <div className="flex flex-col justify-center items-center gap-6">
            <img
              src="http://127.0.0.1:3500/public/girl.webp"
              loading="eager"
              alt="girl"
              className="w-[300px]"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="text-gray-600 text-xl font-semibold">
                سامانه مدیریت یادگیری تخته سفید
              </div>
              <div className="text-gray-400 text-sm font-medium">
                همین حالا به تخته سفید بپیوندید
              </div>
            </div>
            <div className="w-full flex gap-4">
              <Button
                variant="contained"
                size="large"
                fullWidth
                className="!py-[10px] !px-8"
              >
                تست رایگان
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                className="!py-[10px] !px-8"
              >
                خرید سرویس
              </Button>
            </div>
          </div>
          <div className="px-6">
            <div className="bg-gray-50  flex flex-col gap-10 justify-center items-center p-6 rounded-2xl">
              <div className="flex items-center flex-col gap-1">
                <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                  +10
                </span>
                <span className="text-gray-400 text-sm font-extralight">
                  رویداد برگزار شده
                </span>
              </div>
              <div className="flex items-center flex-col gap-1">
                <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                  +236
                </span>
                <span className="text-gray-400 text-sm font-extralight">
                  شرکت کننده
                </span>
              </div>
              <div className="flex items-center flex-col gap-1">
                <span className="text-3xl font-bold text-gray-600 YekanBakhFaNum">
                  +20
                </span>
                <span className="text-gray-400 text-sm font-extralight">
                  برگزار کننده
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-6">
            <div className="text-lg text-gray-400">
              همراهانی که به تخته سفید اعتماد کردند
            </div>
            <div className="w-full flex justify-around">
              <img
                src="http://127.0.0.1:3500/public/educ_partner.webp.webp"
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
            </div>
          </div>
          <div className="w-full flex flex-col gap-12">
            <div className="w-full flex flex-col gap-4">
              <img
                src="http://127.0.0.1:3500/public/exam.png"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  امکان برگزاری آزمون آنلاین
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                loading="lazy"
                src="http://127.0.0.1:3500/public/online_class.webp"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  کلاس های آنلاین و حضور و غیاب
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">حضور و غیاب در کلاس</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                src="http://127.0.0.1:3500/public/practise.webp"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  بارگذاری تکالیف و ثبت نمرات
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                src="http://127.0.0.1:3500/public/chat.webp"
                loading="eager"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  امکان چت با همکلاسی ها و اساتید
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                src="http://127.0.0.1:3500/public/exam.png"
                loading="eager"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  امکان برگزاری جلسات آنلاین
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                src="http://127.0.0.1:3500/public/track.webp"
                loading="eager"
                alt=""
                className="w-full"
              />
              <div className="">
                <span className="font-medium text-lg text-gray-600">
                  امکان شخصی سازی
                </span>
                <ul className="flex flex-col gap-3 text-gray-400 mt-4 font-extralight text-sm">
                  <li className="check-list-bullet">
                    امکان ارسال پیام های چند رسانه
                  </li>
                  <li className="check-list-bullet">چت های گروهی</li>
                  <li className="check-list-bullet">امکان ارسال عکس و فایل</li>
                </ul>
              </div>
            </div>
          </div>
          <Faqs />
          <div className="">
            <div className="flex flex-col items-center gap-3 bg-primary-0 p-6 rounded-xl">
              <div className="text-lg text-primary-90 font-bold">
                سامانه مدیریت یادگیری تخته سفید
              </div>
              <div className="text-sm text-primary-50 mb-6">
                همین حالا به خانواده تخته سفید بپیوندید
              </div>
              <Button variant="contained" size="medium">
                ثبت نام رایگان
              </Button>
            </div>
          </div>
        </MainContainer>
        <Footer />
      </div>
    </BasicLayoutMobile>
  );
};

export default Mobile;
