import type { Card } from '@/interfaces/Card';
import { CardType } from '@/interfaces/enums/CardType';

export interface CardStore {
  cards: Card[];
  currentCardType: CardType | null;
  currentCard: Card | null;
}
