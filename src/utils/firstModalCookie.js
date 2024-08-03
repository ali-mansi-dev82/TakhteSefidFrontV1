import { setCookies, getCookies, removeCookies } from "./cookie";

export const setFirstModalCookie = (token) => {
  return setCookies("first_modal", token, 7);
};
export const getFirstModalCookie = async () => {
  return await getCookies("first_modal");
};
export const removeFirstModalCookie = async () => {
  return await removeCookies("first_modal");
};
