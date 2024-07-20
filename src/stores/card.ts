import { defineStore } from 'pinia';
import { randomId } from '@/helpers/randomId';
import { CardType } from '@/interfaces/enums/CardType';
import type { CardStore } from '@/interfaces/CardStore';
import { generateExpDate } from '@/helpers/generateExpDate';

const expDate = generateExpDate(new Date().toString());

export const useCardStore = defineStore('cards', {
  state: (): CardStore => ({
    currentCardType: null,
    currentCard: null,
    cards: [
      {
        id: randomId(0, 9),
        isMyCard: true,
        expDate,
      },
      {
        id: randomId(0, 9),
        isMyCard: true,
        expDate,
      },
      {
        id: randomId(0, 9),
        isMyCard: false,
        expDate,
      },
      {
        id: randomId(0, 9),
        isMyCard: true,
        expDate,
      },
      {
        id: randomId(0, 9),
        isMyCard: true,
        expDate,
      },
      {
        id: randomId(0, 9),
        isMyCard: false,
        expDate,
      },
    ],
  }),
  getters: {
    allcards: (state: CardStore) => state.cards,
    myCards: (state: CardStore) => state.cards.filter((card) => card.isMyCard),
    companyCards: (state: CardStore) => state.cards.filter((card) => !card.isMyCard),
    cardsByCardType: (state: CardStore) =>
      state.cards.filter(
        (card) =>
          (state.currentCardType === CardType.myCard && card.isMyCard) ||
          (state.currentCardType === CardType.companyCard && !card.isMyCard),
      ),
    currentCards: (state: CardStore) => state.currentCard,
  },
});
