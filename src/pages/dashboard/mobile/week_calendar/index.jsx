import React, { useMemo } from "react";
import moment from "jalali-moment";

import { useGetUpcomingActivitiesQuery } from "../../../../services/activityService";
import Body from "./body";
import SkeletonSection from "../../../../components/skeleton_section";

const Index = () => {
  const activities = useGetUpcomingActivitiesQuery();
  moment.locale("fa");

  const weekData = useMemo(() => {
    const days = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعـ"];

    if (activities.status === "fulfilled") {
      const today = moment();
      const startOfWeek = moment(today).startOf("week");
      const daysOfWeek = [];

      for (let i = 0; i < 7; i++) {
        const currentDay = moment(startOfWeek).add(i, "days");
        const dayOfMonth = currentDay.format("jDD");
        const dayOfWeek = days[i];
        const dayActivities = activities.data?.filter((activity) => {
          return moment
            .from(activity.start, "en", "YYYY-MM-DD")
            .isSame(currentDay, "day");
        });
        daysOfWeek.push({
          dayOfMonth,
          dayOfWeek,
          activities: dayActivities,
        });
      }

      return daysOfWeek;
    }
  }, [activities]);

  return weekData ? <Body weekData={weekData} /> : <SkeletonSection />;
};

export default Index;
