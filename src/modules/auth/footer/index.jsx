import React from "react";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import MainContainer from "../../../components/container";

const index = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <MainContainer className='lg:!px-40'>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row justify-start gap-8 lg:gap-36">
            <div>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                <li className="">
                  <Logo />
                </li>
                <li className="call-list-bullet YekanBakhFaNum">09956369877</li>
                <li className="message-list-bullet YekanBakhFaNum">
                  info@takhte-sefid.ir
                </li>
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
      </MainContainer>
    </div>
  );
};

export default index;
