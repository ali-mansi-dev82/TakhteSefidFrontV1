import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";

import InitialLayoutMobile from "../../layouts/mobile/single_layout";
import UploadImages from "./components/image/upload_image";
import { useGetCourseDetailQuery } from "../../services/courseService";
import { useParams } from "react-router-dom";
import SectionComponent from "./components/section_component";

const Mobile = () => {
  const { id } = useParams();
  const { data } = useGetCourseDetailQuery(id);

  const [images, setImages] = useState([]);

  return (
    <InitialLayoutMobile
      title="ویرایش دوره"
      inerrButtonNavigation={
        <div className="w-full inline-flex gap-4 px-4">
          <Button variant="contained" size="medium" fullWidth>
            ثبت ویرایش
          </Button>
          <Button variant="outlined" size="medium" fullWidth>
            انصراف
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <UploadImages images={images} setImages={setImages} />
        <TextField label="عنوان دوره" defaultValue={data?.data?.title} />
        <TextField
          label="توضیحات"
          multiline
          rows={3}
          defaultValue={data?.data?.description}
        />
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
          {data?.data?.sections?.map((item) => (
            <SectionComponent {...item} />
          ))}
        </ul>
      </div>
    </InitialLayoutMobile>
  );
};

export default Mobile;
