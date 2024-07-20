import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

import BasicLayoutDesktop from "../../layouts/desktop/basic_layout";
import girl from "../../assets/girl.png";
import co_partner1 from "../../assets/images/co_partner (1).png";
import co_partner2 from "../../assets/images/co_partner (2).png";
import co_partner3 from "../../assets/images/co_partner (3).png";
import co_partner4 from "../../assets/images/co_partner (4).png";
import exam from "../../assets/images/exam.png";
import online_class from "../../assets/images/online_class.png";
import practise from "../../assets/images/practise.png";
import chat from "../../assets/images/chat.png";
import meet from "../../assets/images/meet.png";
import track from "../../assets/images/track.png";
import MainContainer from "../../components/container";
import Footer from "../../modules/auth/footer/mobile";

const Desktop = () => {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <BasicLayoutDesktop container="off">
      <div className="flex flex-col gap-12">
        <MainContainer className="flex flex-col gap-12">
          <div className="flex flex-row justify-around items-center ">
            {" "}
            <div className="flex flex-col items-start gap-4 pt-14">
              <div className="text-gray-600 text-xl font-semibold">
                سامانه مدیریت یادگیری تخته سفید
              </div>
              <div className="text-gray-400 text-sm font-medium">
                همین حالا به تخته سفید بپیوندید
              </div>
              <div className="flex gap-4 mt-5">
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
            <img src={girl} alt="girl" className="w-[400px]" />
          </div>
          <div className="px-6">
            <div className="bg-gray-100  flex flex-row gap-44 justify-center items-center p-5 rounded-2xl">
              <div className="flex items-center flex-col gap-1">
                <span className="text-2xl font-bold text-gray-600 YekanBakhFaNum">
                  +10
                </span>
                <span className="text-gray-400 text-base font-extralight">
                  رویداد برگزار شده
                </span>
              </div>
              <div className="flex items-center flex-col gap-1">
                <span className="text-2xl font-bold text-gray-600 YekanBakhFaNum">
                  +236
                </span>
                <span className="text-gray-400 text-base font-extralight">
                  شرکت کننده
                </span>
              </div>
              <div className="flex items-center flex-col gap-1">
                <span className="text-2xl font-bold text-gray-600 YekanBakhFaNum">
                  +20
                </span>
                <span className="text-gray-400 text-base font-extralight">
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
              <img src={co_partner1} alt="co_partner1" />
              <img src={co_partner2} alt="co_partner2" />
              <img src={co_partner3} alt="co_partner3" />
              <img src={co_partner4} alt="co_partner4" />
              <img src={co_partner1} alt="co_partner1" />
              <img src={co_partner2} alt="co_partner2" />
              <img src={co_partner3} alt="co_partner3" />
              <img src={co_partner4} alt="co_partner4" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-12">
            <div className="w-full flex flex-row gap-20 items-center justify-center">
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
              <img src={exam} alt="" className="w-[500px]" />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img src={online_class} alt="" className="w-[500px]" />
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
            <div className="w-full flex flex-row gap-20 items-center justify-center">
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
              <img src={practise} alt="" className="w-[500px]" />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img src={chat} alt="" className="w-[500px]" />
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
            <div className="w-full flex flex-row gap-20 items-center justify-center">
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
              <img src={meet} alt="" className="w-[500px]" />
            </div>
            <div className="w-full flex flex-row gap-20 items-center justify-center">
              <img src={track} alt="" className="w-[500px]" />
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
          </div>
          <div className="px-36">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                امکانات تخته سفید چیه؟
              </AccordionSummary>
              <AccordionDetails>
                این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می
                شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای
                استایل دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها
                ظاهر کلی و همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل
                می کنند. شما می توانید هر یک از این موارد را با CSS سفارشی یا
                نادیده گرفتن متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر
                است که تقریباً هر HTML می تواند در داخل .accordion-body قرار
                گیرد، اگرچه این انتقال سرریز را محدود می کند.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                امکانات تخته سفید چیه؟
              </AccordionSummary>
              <AccordionDetails>
                این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می
                شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای
                استایل دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها
                ظاهر کلی و همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل
                می کنند. شما می توانید هر یک از این موارد را با CSS سفارشی یا
                نادیده گرفتن متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر
                است که تقریباً هر HTML می تواند در داخل .accordion-body قرار
                گیرد، اگرچه این انتقال سرریز را محدود می کند.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                امکانات تخته سفید چیه؟
              </AccordionSummary>
              <AccordionDetails>
                این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می
                شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای
                استایل دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها
                ظاهر کلی و همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل
                می کنند. شما می توانید هر یک از این موارد را با CSS سفارشی یا
                نادیده گرفتن متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر
                است که تقریباً هر HTML می تواند در داخل .accordion-body قرار
                گیرد، اگرچه این انتقال سرریز را محدود می کند.
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex items-center justify-center">
            <Button variant="contained" size="medium">
              سوال های بیشتر
            </Button>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-between gap-3 bg-primary-0 py-8 px-20 mx-36 rounded-xl">
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
