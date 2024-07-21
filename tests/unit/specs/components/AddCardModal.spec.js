import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from 'tests/unit/factory';
import component from '@/components/AddCardModal.vue';
import { useCardStore } from '@/stores/card.ts'

describe('AddCardModal.vue', () => {
  let wrapper;
  let cardStore;

  beforeEach(() => {
    wrapper = mount(component, {
      props: { modelValue: true },
      settings: {
        stubActions: false,
      },
    });

    cardStore = useCardStore();
  });
  it('Should add card successfully', () => {
    const expected = 'newCardName'

    expect(wrapper.vm.isOpened).toBeTruthy();

    wrapper.vm.name = expected;
    wrapper.vm.onCLick();
    
    expect(wrapper.vm.isOpened).toBeFalsy();
    expect(cardStore.cards[cardStore.cards.length - 1].name).toBe(expected)
  });
});
