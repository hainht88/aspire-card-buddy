import { date } from 'quasar';

export const generateExpDate = (curDateStr: string) => {
  let newDate = new Date(curDateStr);
  newDate = date.addToDate(newDate, { years: 1 });
  return `${newDate.getMonth() + 1}/${newDate.getFullYear().toString().substring(2)}`;
};
