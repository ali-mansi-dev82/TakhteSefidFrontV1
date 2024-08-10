import React, { useState } from "react";

import ActivityComponent from "./activity_component";
import { ReactComponent as Trash } from "../../../assets/icons/trash.svg";
import { ReactComponent as PenLine } from "../../../assets/icons/pen-line.svg";

const SectionComponent = ({ title, activities }) => {
  const [open, setOpen] = useState(true);
  return (
    <ul className="flex flex-col">
      <li
        className="inline-flex justify-between items-center px-4 py-4 border-b border-t border-gray-300 bg-gray-50"
        onClick={setOpen.bind(this, !open)}
      >
        <span className="text-base text-primary-60 YekanBakhFaNum">
          {title}
        </span>
        <div className="inline-flex gap-2">
        <button className="inline-flex w-9 h-9 items-center justify-center bg-primary-0 text-primary-60 rounded-md">
          <span className="inline-flex w-4">
            <PenLine />
          </span>
        </button>
        <button className="inline-flex w-9 h-9 items-center justify-center bg-primary-0 text-primary-60 rounded-md">
          <span className="inline-flex w-4">
            <Trash />
          </span>
        </button>
      </div>
      </li>
      <ul className={`flex flex-col h-0 overflow-hidden ${open && `h-auto py-2`} duration-300 ease-in-out	 `}>
        {activities?.map((activity) => (
          <ActivityComponent {...activity} />
        ))}
      </ul>
    </ul>
  );
};

export default SectionComponent;
