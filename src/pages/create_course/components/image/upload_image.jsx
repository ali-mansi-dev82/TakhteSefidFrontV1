import React from "react";

import Image from "./preview_image";
import { ReactComponent as ImageUp } from "../../../../assets/icons/image-up.svg";
import { makeBlob } from "../../../../utils/blob";
import axios from "axios";
import { API_IMAGE_URL } from "../../../../constants/api_endpoints";
import { setImage } from "../../../../features/course/createCourseSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, useSelector } from "react-redux";
const UploadImages = ({ setImage }) => {
  const { image } = useSelector((redux) => redux.create_course);

  async function handleChange(e) {
    const inputFiles = e.target.files;
    if (inputFiles.length > 0) {
      const file = inputFiles[0];
      const blob = makeBlob(file);
      setImage({
        name: file.name,
        blob,
        uploaded: false,
        url: "",
        percent: 0,
      });

      const onUploadProgressFn = (e) => {
        setImage({
          name: file.name,
          blob,
          uploaded: e?.upload,
          url: "",
          percent: e?.total - e.loaded,
        });
      };
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await axios.post(
          `${API_IMAGE_URL}/upload/`,
          formData,
          { onUploadProgress: onUploadProgressFn }
        );
        if (data?.url) {
          setImage({
            name: file.name,
            blob,
            uploaded: true,
            url: data?.url,
            percent: 100,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="label">
        <span className="label-text text-primary-70 text-xs pb-1">
          عکس آگهی
        </span>
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        <label
          className="flex w-24 h-24 cursor-pointer appearance-none justify-center rounded-md border border-dashed border-spacing-[2rem] border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
          tabIndex="0"
        >
          <span
            htmlFor="photo-dropbox"
            className="flex items-center space-x-2 text-primary-60 p-3"
          >
            <ImageUp />
          </span>
          <input
            id="photo-dropbox"
            type="file"
            accept="image/jpeg,image/png"
            className="sr-only"
            onChange={handleChange}
          />
        </label>
        {image?.name && <Image key={1} {...image} />}
      </div>

      <div className="label">
        <span className="text-gray-400 text-xs">
          فقط یک عکس میتوانید انتخاب کنید.
        </span>
      </div>
    </section>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setImage }, dispatch);
export default connect(null, mapDispatchToProps)(UploadImages);
