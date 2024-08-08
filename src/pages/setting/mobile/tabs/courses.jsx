import React from "react";
import { useGetAllCourseDetailsQuery } from "../../../../services/alCourseService";
import { Button, Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "شماره", width: 50 },
  { field: "title", headerName: "عنوان", width: 150 },
  { field: "teacher", headerName: "شماره", width: 120 },
];

const CoursesTab = () => {
  const { data, isLoading } = useGetAllCourseDetailsQuery();

  console.log(data);

  return (
    <div className="flex flex-col gap-6">
      <div className="inline-flex gap-3">
        <Button variant="contained">افزودن دوره جدید</Button>
      </div>
      {isLoading ? (
        <Skeleton height={400} />
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data?.map((value, index, array) => {
              return {
                id: index + 1,
                title: value?.title,
                teacher: value?.teacher?.fullname,
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

export default CoursesTab;
