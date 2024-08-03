import React, { useState } from "react";
import ActivityComponent from "./ActivityComponent";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron-down.svg";

const SectionComponent = ({ title, activities }) => {
  const [open, setOpen] = useState(true);
  return (
    <ul className="flex flex-col">
      <li
        className="inline-flex justify-between items-center px-4 py-4 border-b border-t border-gray-300 bg-gray-50"
        onClick={setOpen.bind(this, !open)}
      >
        <span className="text-sm text-primary-60 YekanBakhFaNum">
          {title}
        </span>
        <span className={`duration-100 ${open && `rotate-180`}`}>
          <Chevron />
        </span>
      </li>
      {/* {open&&} */}
      <ul className={`flex flex-col h-0 overflow-hidden ${open && `h-auto py-2`} duration-300 ease-in-out	 `}>
        {activities?.map((activity) => (
          <ActivityComponent {...activity} />
        ))}
      </ul>
    </ul>
  );
};

export default SectionComponent;
