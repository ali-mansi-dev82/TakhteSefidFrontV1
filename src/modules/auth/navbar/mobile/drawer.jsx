import React from "react";
import { Button, Drawer } from "@mui/material";

import { ReactComponent as Hamberger } from "../../../../assets/icons/elipes.svg";
import { ReactComponent as X } from "../../../../assets/icons/x.svg";
import { ReactComponent as Chevrow } from "../../../../assets/icons/chevron-down.svg";
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";

const MobileDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [dropOpen, setDropOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const toggleDrop = (newOpen) => () => {
    setDropOpen(newOpen);
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
          <ul className="flex flex-col gap-2 text-sm text-gray-700 mt-10 group">
            <li className="py-3 w-full" onClick={toggleDrop(!dropOpen)}>
              <div className="w-full inline-flex justify-between">
                <span className="">خدمات</span>
                <Chevrow />
              </div>
              {dropOpen && (
                <ul className="text-gray-500">
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
              )}
            </li>
            <li className="py-3 ">
              <span className="">تعرفه ها</span>
            </li>
            <li className="py-3 ">
              <span className="">تماس با ما</span>
            </li>
            <li className="py-3 ">
              <span className="">درباره ما</span>
            </li>
          </ul>
        </section>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
