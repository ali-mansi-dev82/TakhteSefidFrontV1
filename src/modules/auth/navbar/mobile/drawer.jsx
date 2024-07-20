import React from "react";
import { Button, Drawer } from "@mui/material";

import { ReactComponent as Hamberger } from "../../../../assets/icons/elipes.svg";
import { ReactComponent as X } from "../../../../assets/icons/x.svg";
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";

const MobileDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <span onClick={toggleDrawer(true)} className="cursor-pointer">
        <Hamberger />
      </span>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <section className="px-4 py-5 min-w-[80vw]">
          <div className="w-full inline-flex justify-between items-center">
            <Logo />
            <X onClick={toggleDrawer(false)} />
          </div>
          <div className="w-full flex  gap-4 mt-4">
            <Button
              variant="contained"
              size="small"
              fullWidth
              className="!py-[10px] !px-8"
            >
              ثبت نام
            </Button>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              className="!py-[10px] !px-8"
            >
              ورود
            </Button>
          </div>
          <ul className="flex flex-col gap-8 text-sm text-gray-700 mt-10">
            <li className="">
              <span className="">خدمات</span>
            </li>
            <li className="">
              <span className="">تعرفه ها</span>
            </li>
            <li className="">
              <span className="">تماس با ما</span>
            </li>
            <li className="">
              <span className="">درباره ما</span>
            </li>
          </ul>
        </section>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
