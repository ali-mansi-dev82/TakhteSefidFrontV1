import React from "react";
import { useGetAllUserDetailsQuery } from "../../../../services/allUserService";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Skeleton } from "@mui/material";

const columns = [
  { field: "id", headerName: "شماره", width: 50 },
  { field: "fullName", headerName: "نام", width: 130 },
  { field: "mobile", headerName: "شماره", width: 120 },
  { field: "email", headerName: "ایمیل", width: 190 },
];

const UsersTab = () => {
  const { data, isLoading } = useGetAllUserDetailsQuery();

  return (
    <div className="flex flex-col gap-6">
      <div className="inline-flex gap-3">
        <Button variant="contained">افزودن کاربر جدید</Button>
        <Button variant="outlined">افزودن گروهی</Button>
      </div>
      {isLoading ? (
        <Skeleton height={400} />
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data?.map((value, index, array) => {
              return {
                id: index + 1,
                fullName: value.fullname,
                mobile: value?.mobile,
                email: value?.email,
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
      )}
    </div>
  );
};

export default UsersTab;
