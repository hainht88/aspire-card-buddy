<script setup lang="ts">
import { ref } from 'vue';
import { CardType } from '@/interfaces/enums/CardType';
import { useCardStore } from '@/stores/card';

const cardStore = useCardStore();

const tabs = ref([
  { id: CardType.myCard, label: 'My debit cards' },
  { id: CardType.companyCard, label: 'All company cards' },
]);

cardStore.currentCardType = CardType.myCard;

const onClick = (id: CardType) => {
  cardStore.currentCardType = id;
};
</script>

<template>
  <div
    class="tw-mt-[30px] tw-leading-[13px] tw-text-13 tw-text-white tw-flex tw-gap-x-[33px] md:tw-leading-5 md:tw-text-14 md:tw-gap-x-8 md:tw-text-black"
  >
    <div
      @click="onClick(tab.id)"
      v-for="(tab, index) of tabs"
      :key="index"
      class="tw-cursor-pointer tw-border-b-2 tw-border-transparent tw-transition-all tw-duration-75 tw-pb-[5.5px]"
      :class="{
        'tw-font-bold !tw-border-accent': cardStore.currentCardType === tab.id,
        'tw-opacity-50 md:tw-opacity-30': cardStore.currentCardType !== tab.id,
      }"
    >
      {{ tab.label }}
    </div>
  </div>
</template>
