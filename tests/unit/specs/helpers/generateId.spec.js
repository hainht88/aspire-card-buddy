import { generateId } from '@/helpers/generateId.ts'

describe('generateId', () => {
  it('Should generate id properly with default values', () => {
    const idString = generateId();
    expect(idString).toMatch(/^[0-9]{1,16}$/gi);
  });

  it('Should generate id properly with custom values', () => {
    const idString = generateId(5, 3, 5);
    expect(idString).toMatch(/^[3-5]{1,5}$/gi);
  });
});
