import React from "react";
import { ReactComponent as Chevron } from "../../../../assets/icons/chevron-down.svg";

const Dropdown = () => {
  return (
    <li className="cursor-pointer group relative py-6">
      <span className="inline-flex gap-4 items-center">
        خدمات
        <Chevron />
      </span>

      <ul className="absolute invisible group-hover:visible top-5 bg-white w-max border border-gray-200 rounded-lg mt-8 overflow-hidden">
        <li className="hover:bg-primary-10 hover:text-primary-80 text-sm px-4 py-3">
          برگزاری کلاس آنلاین
        </li>
        <li className="hover:bg-primary-10 hover:text-primary-80 text-sm px-4 py-3">
          برگزاری وبینار
        </li>
        <li className="hover:bg-primary-10 hover:text-primary-80 text-sm px-4 py-3">
          برگزاری جلسه آنلاین (وب کنفرانس)
        </li>
      </ul>
    </li>
  );
};

export default Dropdown;
