import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import SectionComponent from "./components/section_component";
import UploadImages from "./components/image/upload_image";

const Mobile = () => {
  const [images, setImages] = useState([]);
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
    <InitialLayoutMobile
      title="ویرایش دوره"
      inerrButtonNavigation={
        <div className="w-full inline-flex gap-4 px-4">
          <Button variant="contained" size="large" fullWidth>
            ثبت دوره
          </Button>
          <Button variant="outlined" size="large" fullWidth>
            انصراف
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <UploadImages images={images} setImages={setImages} />
        <TextField label="عنوان دوره" />
        <TextField label="توضیحات" multiline rows={3} />
        <Autocomplete
          multiple
          fullWidth
          limitTags={2}
          id="multiple-limit-tags"
          options={[
            { title: "طراحی رابط کاربری" },
            { title: "طراحی گرافیک" },
            { title: "تکنولوژی" },
          ]}
          defaultValue={[{ title: "طراحی گرافیک" }]}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField fullWidth label="تگ ها" {...params} />
          )}
        />
        <ul className="flex flex-col border border-gray-300 justify-center rounded-md overflow-hidden">
          <li className="inline-flex justify-between items-center px-3 py-4 bg-gray-100 ">
            <span className="text-base text-primary-60 font-bold">
              سرفصل ها
            </span>
            <Button variant="contained">سرفصل جدید</Button>
          </li>
          {section.map((item) => (
            <SectionComponent {...item} />
          ))}
        </ul>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
