import { TextField } from "@mui/material";
import React from "react";

import { ReactComponent as PenLine } from "../assets/icons/pen-line.svg";

const EditableInput = ({ value, setValue, labelClass }) => {
  const [isNameFocused, setIsNamedFocused] = React.useState(false);

  return (
    <div className="w-full">
      {!isNameFocused ? (
        <div
          className={`${labelClass} inline-flex items-center gap-2`}
          onClick={() => {
            setIsNamedFocused(true);
          }}
        >
          <p className="line-clamp-1 w-full">{value}</p>
          <span className="inline-flex w-6 p-1 text-primary-50">
            <PenLine />
          </span>
        </div>
      ) : (
        <TextField
          autoFocus
          defaultValue={value}
          size="small"
          variant="standard"
          onChange={(event) => setValue(event.target.value)}
          onBlur={(event) => setIsNamedFocused(false)}
        />
      )}
    </div>
  );
};

export default React.memo(EditableInput);
