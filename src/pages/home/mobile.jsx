import React, { useState } from "react";
import BasicLayoutMobile from "../../layouts/mobile/basic_layout";
import girl from "../../assets/girl.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
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
import { ReactComponent as Logo } from "../../assets/Logo.svg";
const Mobile = () => {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <BasicLayoutMobile containerClass="mb-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <img src={girl} alt="girl" className="w-[400px]" />
          <div className="flex flex-col items-center gap-4">
            <div className="text-gray-600 text-xl font-semibold">
              سامانه مدیریت یادگیری تخته سفید
            </div>
            <div className="text-gray-400 text-sm font-medium">
              همین حالا به تخته سفید بپیوندید
            </div>
          </div>
          <div className="flex gap-4">
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
        <div className="px-6">
          <div className="bg-gray-100  flex flex-col gap-6 justify-center items-center p-4 rounded-2xl">
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
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full flex flex-col gap-4">
            <img src={exam} alt="" className="w-full" />
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
            <img src={online_class} alt="" className="w-full" />
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
            <img src={practise} alt="" className="w-full" />
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
            <img src={chat} alt="" className="w-full" />
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
            <img src={meet} alt="" className="w-full" />
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
            <img src={track} alt="" className="w-full" />
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
        <div className="">
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
              شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل
              دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و
              همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما
              می توانید هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن
              متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر
              HTML می تواند در داخل .accordion-body قرار گیرد، اگرچه این انتقال
              سرریز را محدود می کند.
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
              شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل
              دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و
              همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما
              می توانید هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن
              متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر
              HTML می تواند در داخل .accordion-body قرار گیرد، اگرچه این انتقال
              سرریز را محدود می کند.
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
              شود، تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل
              دادن به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و
              همچنین نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما
              می توانید هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن
              متغیرهای پیش فرض ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر
              HTML می تواند در داخل .accordion-body قرار گیرد، اگرچه این انتقال
              سرریز را محدود می کند.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="contained" size="medium">
            سوال های بیشتر
          </Button>
        </div>
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
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                <li className="">
                  <Logo />
                </li>
                <li className="call-list-bullet YekanBakhFaNum">09956369877</li>
                <li className="message-list-bullet">info@takhte-sefid.ir</li>
              </ul>
            </div>
            <div>
              <div className="text-base font-semibold mb-4">خدمات</div>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li>برگزاری وبینار</li>
                <li>برگزاری آزمون آنلاین</li>
                <li>برگزاری کلاس آنلاین</li>
                <li>شخصی سازی</li>
              </ul>
            </div>
            <div>
              <div className="text-base font-semibold mb-4">درباره ما</div>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li>درباره ما</li>
                <li>امکانات تخته سفید</li>
                <li>راهنمای تخته سفید</li>
                <li>مشتریان ما</li>
                <li>قوانین و مقررات</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 text-sm text-gray-500 text-center pt-4">
            تمام حقوق این وبسایت متعلق به تخته سفید است.
          </div>
        </div>
      </div>
    </BasicLayoutMobile>
  );
};

export default Mobile;
