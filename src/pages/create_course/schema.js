import * as yup from "yup";

export const createCourseSchema = yup.object().shape({
  title: yup.string().required("عنوان دوره را وارد کنید."),
  description: yup.string(),
  start: yup
    .date("تاریخ شروع دوره را وارد کنید")
    .required("تاریخ شروع دوره را وارد کنید"),
  end: yup
    .date("تاریخ پایان دوره را وارد کنید")
    .required("تاریخ پایان دوره را وارد کنید"),
});
