import { Button, MenuItem, Pagination, Select } from "@mui/material";
import React from "react";

import { ReactComponent as Search } from "../../../../assets/icons/search.svg";

const MemberTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex gap-3">
        <Button variant="contained">ثبت نام کاربر جدید</Button>
        <Button variant="outlined">ثبت نام گروهی</Button>
      </div>
      <label
        className="inline-flex items-center border border-gray-200 relative bg-gray-100 rounded-lg"
        htmlFor="search"
      >
        <span className="absolute right-3">
          <Search />
        </span>
        <input
          type="text"
          id="search"
          placeholder="جستجو در نام ها"
          className="w-full outline-none pr-10 bg-gray-100"
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          sx={{ border: 0 }}
          className="!border-0 !outline-none"
          variant="outlined"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </label>
      {/* <MemberTable /> */}
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  );
};

export default MemberTab;
