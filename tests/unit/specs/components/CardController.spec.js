import { describe, it, expect, beforeEach } from 'vitest';
import { shallow } from 'tests/unit/factory';
import component from '@/components/CardController.vue';
import { CardType } from '@/interfaces/enums/CardType';
import { useCardStore } from '@/stores/card.ts'
import { getMockedCard } from 'tests/unit/mocks'


describe('CardController.vue', () => {
  let wrapper;
  let cardStore;

  beforeEach(() => {
    wrapper = shallow(component, {
      settings: {
        stubActions: false,
      },
    });

    cardStore = useCardStore();
    
    cardStore.cards = getMockedCard();
    cardStore.currentCardType = CardType.myCard;
    cardStore.currentCard = cardStore.cardsByCardType[0];
  });
  
  it('Should freeze/unfreeze card successfully', () => {
    expect(cardStore.currentCard.isFreezed).toBeFalsy()
    wrapper.vm.onClick({ id: 'freezeCard' });
    expect(cardStore.currentCard.isFreezed).toBeTruthy()
    wrapper.vm.onClick({ id: 'freezeCard' });
    expect(cardStore.currentCard.isFreezed).toBeFalsy()
  });

  it('Should cancel card successfully', () => {
    const cardLength = cardStore.cards.length;
    const cardsByCardTypeLength = cardStore.cardsByCardType.length;
    const firstCard = cardStore.cardsByCardType[0];
    const secondCard = cardStore.cardsByCardType[1];

    expect(cardStore.cards.length).toBe(cardLength);
    expect(cardStore.cardsByCardType.length).toBe(cardsByCardTypeLength);
    expect(cardStore.currentCard.id).toBe(firstCard.id);

    wrapper.vm.onClick({ id: 'cancelCard' });

    expect(cardStore.cards.length).toBe(cardLength - 1);
    expect(cardStore.cardsByCardType.length).toBe(cardsByCardTypeLength - 1);
    expect(cardStore.currentCard.id).toBe(secondCard.id);
  });
});
