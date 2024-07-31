import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";

const SettingTab = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="فعال بودن دوره"
      />
    </FormGroup>
  );
};

export default SettingTab;
