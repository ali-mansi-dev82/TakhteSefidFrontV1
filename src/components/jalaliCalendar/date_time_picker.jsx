import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true }); // Optional, to use Persian digits

const JalaliDateTimePicker = ({ value }) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <DateTimePicker
        label={value}
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default React.memo(JalaliDateTimePicker);
