import { Button, FormControlLabel, Skeleton, Switch } from "@mui/material";
import React from "react";

import { ReactComponent as Trash } from "../../../../assets/icons/trash.svg";

const SettingTab = ({ data }) => {
  return (
    <div>
      {!data ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col gap-4">
          <FormControlLabel
            control={<Switch defaultChecked={data?.visible} />}
            label="فعال بودن دوره"
          />
          <Button
            variant="outlined"
            color="error"
            startIcon={
              <span className="inline-flex w-4">
                <Trash />
              </span>
            }
          >
            حذف کردن دوره
          </Button>
        </div>
      )}
    </div>
  );
};

export default SettingTab;
