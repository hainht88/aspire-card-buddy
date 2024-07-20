import { defineStore } from 'pinia';
import { generateId } from '@/helpers/generateId';
import { CardType } from '@/interfaces/enums/CardType';
import type { Card } from '@/interfaces/Card';
import type { CardStore } from '@/interfaces/CardStore';
import { generateExpDate } from '@/helpers/generateExpDate';

const expDate = generateExpDate(new Date().toString());

export const useCardStore = defineStore('cards', {
  state: (): CardStore => ({
    currentCardType: null,
    currentCard: null,
    cards: [
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
  actions: {
    addNewCard({ name }: { name: string }) {
      const newCard: Card = {
        id: generateId(),
        isMyCard: this?.currentCardType === CardType.myCard,
        expDate,
        name
      }
      this.cards.push(newCard);
      this.currentCard = this.cardsByCardType[0];
    },
    cancelCard({ id }: { id: string }) {
      this.cards = this.cards.filter((card) => card.id !== id);
      this.currentCard = this.cardsByCardType[0];
    }
  }
});
