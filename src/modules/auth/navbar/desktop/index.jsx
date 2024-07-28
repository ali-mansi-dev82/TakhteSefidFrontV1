import React from "react";
import { Button } from "@mui/material";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import MainContainer from "../../../../components/container";
import Dropdown from "./dropdown";
import Modal from "../../modal";
import useDisclosure from "../../../../hooks/useDisclosure";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const [isModalOpen, openModal, closeModal] = useDisclosure(false);
  const { isAuthed } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-row justify-center bg-white items-center border-b border-gray-200 h-[65px] fixed top-0 left-0 right-0 z-50">
      <MainContainer className="flex justify-between items-center h-[65px]">
        <div className="flex gap-16 items-center h-full">
          <Logo />
          <ul className="flex flex-row items-center gap-12 text-sm text-gray-600 h-full">
            <Dropdown />
            <li className="cursor-pointer">تعرفه ها</li>
            <li className="cursor-pointer">تماس با ما</li>
            <li className="cursor-pointer">درباره ما</li>
          </ul>
        </div>
        {isAuthed ? (
          <Link to={`/dashboard`}>
            <Button size="medium" variant="contained">
              ورود به حساب کاربری
            </Button>
          </Link>
        ) : (
          <Button size="medium" variant="contained" onClick={openModal}>
            ورود به حساب کاربری
          </Button>
        )}
      </MainContainer>
      {!isAuthed && <Modal open={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Index;
