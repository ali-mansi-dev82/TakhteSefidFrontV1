import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { connect } from "react-redux";

import { closeModal } from "../../../../../features/course/createCourseSlice";
import { ReactComponent as X } from "../../../../../assets/icons/x.svg";
import TypeSelect from "./type_select";
import Create from "./create";

const AddActivity = ({ closeModal }) => {
  const [type, setType] = useState(undefined);

  return (
    <Dialog open onClose={closeModal} fullScreen={type}>
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300"
      >
        <h1 className="text-base  text-gray-800">فعالیت جدید</h1>
        <IconButton onClick={closeModal}>
          <X />
        </IconButton>
      </DialogTitle>
      {!type && (
        <TypeSelect isOpen={true} onClose={closeModal} setType={setType} />
      )}
      {type && <Create onClose={closeModal} type={type} />}
    </Dialog>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeModal }, dispatch);
export default connect(null, mapDispatchToProps)(AddActivity);
