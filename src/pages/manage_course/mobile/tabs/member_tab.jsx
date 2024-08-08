import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "شماره", width: 50 },
  { field: "fullName", headerName: "نام", width: 130 },
  { field: "mobile", headerName: "شماره", width: 120 },
  { field: "email", headerName: "ایمیل", width: 190 },
  // { field: "action", headerName: "", width: 50 },
];

const MemberTab = ({ data }) => {
  console.log(data);

  return (
    <div className="flex flex-col">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data?.map((value, index, array) => {
            return {
              id: index + 1,
              fullName: value.fullname,
              mobile: value?.mobile,
              email: value?.email,
              // action: "ddd",
            };
          })}
          columns={columns}
          scrollbarSize={1}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default MemberTab;
