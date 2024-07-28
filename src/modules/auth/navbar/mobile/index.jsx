import React from "react";
import { Button } from "@mui/material";

import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import MainContainer from "../../../../components/container";
import Drawer from "./drawer";
import Modal from "../../modal";
import useDisclosure from "../../../../hooks/useDisclosure";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const [isModalOpen, openModal, closeModal] = useDisclosure(false);
  const { isAuthed } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row justify-center items-center bg-white border-b border-gray-200 h-[65px] fixed top-0 left-0 right-0 z-50">
      <MainContainer className="flex justify-between items-center">
        <Drawer />
        <Logo />
        {isAuthed ? (
          <Link to={`/dashboard`}>
            <Button size="medium" variant="contained">
              ورود
            </Button>
          </Link>
        ) : (
          <Button size="medium" variant="contained" onClick={openModal}>
            ورود
          </Button>
        )}
      </MainContainer>
      {!isAuthed && <Modal open={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Index;
