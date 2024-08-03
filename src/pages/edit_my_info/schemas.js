import * as yup from "yup";

export const userInfoSchema = yup.object().shape({
  fullname: yup.string().required('وارد کردن نام اجباری است.'),
  email: yup.string().email(),
  mobile: yup
    .string()
    .matches(/^09[0-9]{9}$/, "موبایل به درستی وارد نشده است."),
});
