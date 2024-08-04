import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Learning } from "../../assets/icons/learning.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Setting } from "../../assets/icons/settings-2.svg";
import { ReactComponent as Training } from "../../assets/icons/training.svg";
import { ReactComponent as AddCircle } from "../../assets/icons/add-circle.svg";

const items = {
  user: [
    { title: "داشبورد", icon: <Dashboard />, link: `/dashboard` },
    {
      title: "یادگیری من",
      icon: <Learning />,
      link: `/my-learning`,
    },
    { title: "تقویم", icon: <Calendar />, link: `/calendar` },
    { title: "پنل من", icon: <User />, link: `/my-panel` },
  ],
  teacher: [
    { title: "داشبورد", icon: <Dashboard />, link: `/dashboard` },
    {
      title: "آموزش من",
      icon: <Training />,
      link: `/my-training`,
    },
    { title: "دوره جدید", icon: <AddCircle />, link: `/create_course` },
    { title: "پنل من", icon: <User />, link: `/my-panel` },
  ],
  admin: [
    { title: "داشبورد", icon: <Dashboard />, link: `/dashboard` },
    {
      title: "آموزش من",
      icon: <Training />,
      link: `/my-training`,
    },
    { title: "دوره جدید", icon: <AddCircle />, link: `/create_course` },
    { title: "تنظیمات", icon: <Setting />, link: `/setting` },
    { title: "پنل من", icon: <User />, link: `/my-panel` },
  ],
};
export default items;
