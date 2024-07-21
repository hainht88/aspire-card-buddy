import { date } from 'quasar';

/**
 * Accept a date string/current date string, add 1 year and return month and modified year
 * @param curDateStr - Date string - MM/DD/YYYY
 * @returns - A string of month and year - MM/YY
 */
export const generateExpDate = (curDateStr: string) => {
  let newDate = date.isValid(curDateStr) ? new Date(curDateStr) : new Date();
  newDate = date.addToDate(newDate, { years: 1 });
  return `${newDate.getMonth() + 1}/${newDate.getFullYear().toString().substring(2)}`;
};
