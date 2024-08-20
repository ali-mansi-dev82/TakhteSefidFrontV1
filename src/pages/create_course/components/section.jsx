import { Button, Menu, MenuItem } from "@mui/material";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import React from "react";

import {
  updateSectionTitle,
  deleteSection,
  openModal,
} from "../../../features/course/createCourseSlice";
import { ReactComponent as EllipsisVertical } from "../../../assets/icons/ellipsis-vertical.svg";
import { ReactComponent as Trash } from "../../../assets/icons/trash.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import EditableInput from "../../../components/editable_input";
import useDisclosure from "../../../hooks/useDisclosure";
import Activity from "./activity";

const Section = ({
  id,
  title,
  activities,
  deleteSection,
  openModal,
  updateSectionTitle,
}) => {
  const [isMenuOpen, openMenu, closeMenu] = useDisclosure(false);
  const anchorRef = React.useRef(null);

  return (
    <li className="flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      <div className="inline-flex gap-4 justify-between items-center px-4 py-4 border-b border-gray-300 bg-gray-50">
        <EditableInput
          value={title}
          labelClass="text-base"
          setValue={(value) => {
            updateSectionTitle({
              sectionId: id,
              newTitle: value,
            });
          }}
        />
        <div className="inline-flex gap-2">
          <button
            type="button"
            ref={anchorRef}
            onClick={openMenu}
            className="inline-flex w-8 h-8 items-center justify-center hover:bg-primary-0 text-primary-60 rounded-full"
          >
            <span className="inline-flex w-4">
              <EllipsisVertical />
            </span>
          </button>
          <Menu
            id="basic-menu"
            open={isMenuOpen}
            anchorEl={anchorRef.current}
            onClose={closeMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={deleteSection.bind(this, id)}>
              <div className="inline-flex gap-2 items-center h-4 text-red-700 text-base">
                <Trash />
                حذف
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <ul
        className={`flex flex-col overflow-hidden h-auto py-2 duration-300 ease-in-out`}
      >
        {activities.map((activity) => (
          <Activity key={activity?.id} {...activity} sectionId={id} />
        ))}
        <li className="px-4 py-2 pt-4 text-center">
          <Button
            variant="outlined"
            size="small"
            onClick={() => openModal(1)}
            className="!w-max !px-3"
            startIcon={
              <span className="inline-flex w-4">
                <Plus />
              </span>
            }
          >
            فعالیت جدید
          </Button>
        </li>
      </ul>
    </li>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { deleteSection, openModal, updateSectionTitle },
    dispatch
  );
export default connect(null, mapDispatchToProps)(Section);
