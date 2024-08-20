import { Button, DialogContent } from "@mui/material";
import React, { useState } from "react";

import { ReactComponent as Presentation } from "../../../../../assets/icons/presentation.svg";
import { ReactComponent as Practice } from "../../../../../assets/icons/notebook-pen.svg";
import { ReactComponent as Exam } from "../../../../../assets/icons/square-check-big.svg";
import { ReactComponent as Blog } from "../../../../../assets/icons/notebook-text.svg";
import { ReactComponent as Video } from "../../../../../assets/icons/square-play.svg";
import { ReactComponent as File } from "../../../../../assets/icons/file.svg";

const TypeSelect = ({ isOpen, onClose, setType }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleBtn = () => {
    if (selectedType) {
      setType(selectedType);
    }
  };

  const RadioSelect = ({
    title,
    icon,
    bgColor,
    textColor,
    isSelect,
    onClick,
  }) => {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col gap-2 items-center justify-center border p-3 rounded-md ${textColor} ${
          isSelect && "border-primary-40"
        }`}
      >
        <span className={`flex w-10 p-[10px]  ${bgColor} rounded-full`}>
          {icon}
        </span>
        <p className="text-sm text-center">{title}</p>
      </div>
    );
  };
  return (
    <>
      <DialogContent>
        <div className="grid grid-cols-3 gap-3 pt-5">
          <RadioSelect
            title="کلاس "
            icon={<Presentation />}
            textColor="text-primary-70"
            bgColor="bg-primary-0"
            isSelect={selectedType === "class"}
            onClick={setSelectedType.bind(this, "class")}
          />
          <RadioSelect
            title="تمرین"
            icon={<Practice />}
            textColor="text-blue-700"
            bgColor="bg-blue-50"
            isSelect={selectedType === "practice"}
            onClick={setSelectedType.bind(this, "practice")}
          />
          <RadioSelect
            title="آزمون"
            icon={<Exam />}
            textColor="text-yellow-700"
            bgColor="bg-yellow-100"
            isSelect={selectedType === "exam"}
            onClick={setSelectedType.bind(this, "exam")}
          />
          <RadioSelect
            title="مقاله"
            icon={<Blog />}
            textColor="text-gray-700"
            bgColor="bg-gray-100"
            isSelect={selectedType === "blog"}
            onClick={setSelectedType.bind(this, "blog")}
          />
          <RadioSelect
            title="ویدیو"
            icon={<Video />}
            textColor="text-cyan-700"
            bgColor="bg-cyan-100"
            isSelect={selectedType === "video"}
            onClick={setSelectedType.bind(this, "video")}
          />
          <RadioSelect
            title="فایل"
            icon={<File />}
            textColor="text-red-700"
            bgColor="bg-red-100"
            isSelect={selectedType === "file"}
            onClick={setSelectedType.bind(this, "file")}
          />
        </div>
      </DialogContent>
      <div className="inline-flex p-4 gap-3 border-t border-gray-300">
        <Button
          variant="contained"
          disabled={selectedType === ""}
          onClick={handleBtn}
          fullWidth
        >
          ادامه
        </Button>
        <Button variant="outlined" onClick={onClose} fullWidth>
          انصراف
        </Button>
      </div>
    </>
  );
};
export default TypeSelect;
