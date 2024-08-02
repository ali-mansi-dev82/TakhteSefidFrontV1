import moment from "jalali-moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ActivityComponent from "../ActivityComponent";
import { ReactComponent as Chevron } from "../../../../assets/icons/chevron-down.svg";

const Body = ({ weekData }) => {
  const [daySelect, setDaySelect] = useState(moment().format("jDD"));
  const [daySelectActivity, setDaySelectActivity] = useState([]);

  useEffect(() => {
    const daySelectData = weekData.filter(
      (value) => value.dayOfMonth === daySelect
    );
    if (daySelectData.length > 0) {
      const daySelectActivityData = daySelectData[0].activities;
      setDaySelectActivity(daySelectActivityData);
    }
  }, [daySelect, weekData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex justify-between items-center">
        <span className="text-base text-gray-700">
          تقویم
        </span>
        <Link
          to={`/my-learning`}
          className="text-sm flex gap-2 justify-center text-primary-60"
        >
          همه
          <span className="rotate-90">
            <Chevron />
          </span>
        </Link>
      </div>
      <div className="flex justify-between">
        {weekData.map((item) => (
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={setDaySelect.bind(this, item.dayOfMonth)}
          >
            <span className="text-xs text-gray-500">{item.dayOfWeek}</span>
            <span
              className={`inline-flex flex-col w-8 h-8 items-center justify-center text-xs text-gray-700 YekanBakhFaNum font-semibold rounded-full ${
                item.dayOfMonth === daySelect &&
                `bg-primary-70 text-white !font-normal`
              }`}
            >
              {item.dayOfMonth}
              {item.activities.length > 0 && (
                <span className="w-[5px] h-[5px] bg-yellow-400 rounded"></span>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col min-h-[25vh] gap-4 mt-4">
        {daySelectActivity.length > 0 ? (
          daySelectActivity?.map((item) => <ActivityComponent {...item} />)
        ) : (
          <div className="text-xs text-gray-500 text-center h-full items-stretch pt-12">
            در این روز فعالیتی ندارید !!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
