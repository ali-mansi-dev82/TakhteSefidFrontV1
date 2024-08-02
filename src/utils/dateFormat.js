import moment from "jalali-moment";

export const dateFormate = (date) => {
  moment.locale("fa");
  const result = moment.from(date, 'en', 'YYYY-MM-DD HH:mm').format('jDD jMMM jYYYY - HH:mm');
  return result;
};
