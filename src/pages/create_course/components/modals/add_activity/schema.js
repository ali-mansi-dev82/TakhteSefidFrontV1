import * as yup from "yup";

export const createActivitySchema = yup.object().shape({
  title: yup.string().required('عنوان فعالیت را وارد کنید.'),
  description: yup.string(),
});
