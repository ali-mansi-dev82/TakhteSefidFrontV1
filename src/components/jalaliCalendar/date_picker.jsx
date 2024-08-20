import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import moment from "moment-jalaali";

const JalaliDatePicker = ({ label, setValue }) => {
  const handleDateChange = (date) => {
    const dateTime = date.format("jYYYY/jMM/jDD");
    const dateTimeString = `${dateTime} 00:00:00`;
    const utcDate = moment(dateTimeString, "jYYYY/jMM/jDD HH:mm:ss")
      .utc()
      .format('YYYY-MM-DD');

    setValue(utcDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <DatePicker
        label={label}
        onChange={handleDateChange}
        renderInput={(params) => (
          <TextField onChange={handleDateChange} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default React.memo(JalaliDatePicker);
