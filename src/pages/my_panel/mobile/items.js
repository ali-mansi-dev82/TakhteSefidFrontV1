import { ReactComponent as Learning } from "../../../assets/icons/learning.svg";
import { ReactComponent as Training } from "../../../assets/icons/training.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as NotebookPen } from "../../../assets/icons/notebook-pen.svg";
import { ReactComponent as Check } from "../../../assets/icons/square-check-big.svg";
import { ReactComponent as Setting } from "../../../assets/icons/settings-2.svg";

const items = {
  user: [
    {
      title: "درس های در حال یادگیری",
      icon: <Learning />,
      link: `/my-learning`,
    },
    { title: "تقویم", icon: <Calendar />, link: `/calendar` },
    { title: "تکالیف", icon: <NotebookPen />, link: `` },
    { title: "آزمون ها", icon: <Check />, link: `` },
  ],
  teacher: [
    {
      title: "درس های در حال آموزش",
      icon: <Training />,
      link: `/my-training`,
    },
    { title: "تقویم", icon: <Calendar />, link: `/calendar` },
    { title: "تکالیف", icon: <NotebookPen />, link: `` },
    { title: "آزمون ها", icon: <Check />, link: `` },
  ],
  admin: [
    {
      title: "درس های در حال آموزش",
      icon: <Training />,
      link: `/my-training`,
    },
    { title: "مدیریت سایت", icon: <Setting />, link: `/setting` },
    { title: "تکالیف", icon: <NotebookPen />, link: `` },
    { title: "آزمون ها", icon: <Check />, link: `` },
  ],
};
export default items;
