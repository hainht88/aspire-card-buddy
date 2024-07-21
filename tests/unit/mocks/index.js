import { generateId } from '@/helpers/generateId';
import { generateExpDate } from '@/helpers/generateExpDate';

const expDate = generateExpDate(new Date().toString());

export const getMockedCard = () => [
  {
    id: generateId(),
    isMyCard: true,
    expDate,
    name: 'Michael Owen'
  },
  {
    id: generateId(),
    isMyCard: true,
    expDate,
    name: 'David Beckham'
  },
  {
    id: generateId(),
    isMyCard: false,
    expDate,
    name: 'Dennis Bergkamp'
  },
  {
    id: generateId(),
    isMyCard: true,
    expDate,
    name: 'Michael Ballack'
  },
  {
    id: generateId(),
    isMyCard: true,
    expDate,
    name: 'John Cena'
  },
  {
    id: generateId(),
    isMyCard: false,
    expDate,
    name: 'The Rock'
  },
]
