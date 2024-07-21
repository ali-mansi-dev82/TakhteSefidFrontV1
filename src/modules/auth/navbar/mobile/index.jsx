import React from "react";
import { Button } from "@mui/material";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";

import MainContainer from "../../../../components/container";
import Drawer from "./drawer";
import Modal from "../../modal";
import useToggle from "../../../../hooks/useToggle";

const Index = () => {
  const [modalOpen, toggleModalOpen] = useToggle(false);

  return (
    <div className="flex flex-row justify-center items-center bg-white border-b border-gray-200 h-[65px] fixed top-0 left-0 right-0 z-50">
      <MainContainer className="flex justify-between items-center">
        <Drawer />
        <Logo />
        <Button size="small" variant="contained" onClick={toggleModalOpen}>
          ثبت نام
        </Button>
      </MainContainer>
      <Modal open={modalOpen} toggleOpen={toggleModalOpen} />
    </div>
  );
};

export default Index;
