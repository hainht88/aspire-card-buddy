export const generateRandomNumber = (min: number = 0, max: number = 9) => Math.floor(Math.random() * (max - min + 1)) + min;
export const generateId = (length: number = 16, min: number = 0, max: number = 9) => {
  let idStr = '';
  for(let i = 0; i < length; i++) {
    idStr += generateRandomNumber();
  }
  console.info('idStr', idStr);
  return idStr;
}
  
