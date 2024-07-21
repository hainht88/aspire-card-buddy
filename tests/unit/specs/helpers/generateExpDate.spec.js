import { generateExpDate } from '@/helpers/generateExpDate.ts'

describe('generateExpDate', () => {
  it('Should generate Experience Date properly with input date string', () => {
    expect(generateExpDate('7/21/2024')).toBe('7/25');
    expect(generateExpDate('12/21/2033')).toBe('12/34');
  });

  it('Should generate Experience Date properly with default current date', () => {
    const curDate = new Date();
    const curYear = (curDate.getFullYear() + 1).toString().substring(2);
    const curMonth = curDate.getMonth() + 1;
    expect(generateExpDate()).toBe(`${curMonth}/${curYear}`);
  });
});
