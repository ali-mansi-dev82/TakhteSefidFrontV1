import { Button, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import useDisclosure from "../../../hooks/useDisclosure";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFirstModalCookie } from "../../../utils/firstModalCookie";

const ButtomDrawer = () => {
  const [open, onOpen, onClose] = useDisclosure(0);
  const { userInfo } = useSelector((redux) => redux.auth);
  const cookie = getFirstModalCookie();

  useEffect(() => {
    console.log(cookie);
  }, [cookie]);

  //   useEffect(() => {
  //     if (open === 0 && (!userInfo?.fullname || userInfo?.fullname === ""))
  //       onOpen();
  //   }, [userInfo, onOpen, open]);
  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        <div className="flex flex-col p-4 gap-4">
          <div className="inline-flex items-center justify-center">
            <span className="w-[45px] h-[4px] bg-gray-300 rounded"></span>
          </div>
          <div className="text-base font-bold text-gray-600">
            خوش اومدی کاربر عزیز 👋
          </div>
          <div className="text-sm text-gray-500 leading-7">
            اگه میخوای تجربه بهتری از تخته سفید داشته باشی، <br />
            اطلاعاتت رو تکمیل کن !!!
          </div>
          <div className="h-4"></div>
          <div className="inline-flex gap-5">
            <Button variant="contained" fullWidth>
              <Link to={`/edit-my-info`}>بزنم بریم</Link>
            </Button>
            <Button onClick={onClose} variant="outlined" fullWidth>
              بعدا
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ButtomDrawer;