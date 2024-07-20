<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Eye from '@/components/icons/Eye.vue';
import LogoWithText from '@/components/icons/LogoWithText.vue';
import Visa from '@/components/icons/Visa.vue';
import { useCardStore } from '@/stores/card';

const cardStore = useCardStore();
const { cardsByCardType, currentCard, currentCardType } = storeToRefs(cardStore);

const reveal = ref(false);

currentCard.value = cardsByCardType.value[0];

watch(
  () => currentCardType.value,
  () => {
    currentCard.value = cardsByCardType.value[0];
    reveal.value = false;
  },
  { immediate: true },
);

watch(
  () => currentCard.value,
  () => {
    reveal.value = false;
  },
);
</script>

<template>
  <div class="tw-flex tw-flex-col tw-w-[358px] xl:tw-w-[414px]">
    <!-- show card number -->
    <div
      class="tw-cursor-pointer tw-flex tw-justify-center tw-items-center tw-gap-x-[6px] w-full md:tw-justify-end tw-self-end tw-h-[27px] tw-w-[151px] tw-px-[9px] md:tw-px-0 md:tw-mr-0 tw-bg-white tw-py-[5px] md:tw-pb-4 md:tw-pt-0 md:tw-mt-8 tw-text-12 tw-font-semibold md:tw-font-bold tw-text-secondary tw-text-center tw-rounded-t-md tw-relative after:tw-absolute after:-tw-bottom-4 after:tw-right-0 after:content-[''] after:tw-w-5 after:tw-h-5 after:tw-bg-white"
      @click="reveal = !reveal"
    >
      <Eye classes="tw-fill-current" width="16px" height="16px" />
      <div>{{ reveal ? 'Hide' : 'Show' }} card number</div>
    </div>
    <!-- card -->

    <q-carousel
      v-model="currentCard"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="secondary"
      navigation
      infinite
      class="tw-bg-transparent tw-text-white tw-h-[260px] xl:tw-h-[289px]"
    >
      <template #navigation-icon="{ active, btnProps, onClick }" class="">
        <div v-if="active" class="tw-mx-1 tw-w-4 tw-h-2 tw-bg-secondary tw-rounded-full"></div>
        <div
          v-else
          class="tw-mx-1 tw-w-2 tw-h-2 tw-bg-secondary tw-opacity-10 tw-rounded-full md:tw-opacity-20"
        ></div>
      </template>
      <q-carousel-slide
        v-for="(card, idx) of cardsByCardType"
        :key="idx"
        :name="card"
        class="no-padding"
      >
        <div
          class="tw-flex tw-flex-col tw-h-[220px] xl:tw-h-[249px] tw-bg-secondary tw-rounded-xl tw-p-6"
        >
          <!-- logo -->
          <div class="tw-self-end">
            <LogoWithText
              classes="tw-fill-current"
              width="74px"
              height="21px"
              viewBox="0 0 125 35"
            />
          </div>

          <!-- name -->
          <div
            class="tw-mt-6 md:tw-mt-7 tw-text-22 md:tw-text-24 tw-leading-5 tw-tracking-[0.53px] md:tw-tracking-[0.58px] tw-font-bold"
          >
            Mark Henry
          </div>

          <!-- number -->
          <div class="tw-mt-[29px] md:tw-mt-[33px]">
            <ul
              class="tw-flex tw-items-center tw-gap-x-6 tw-text-14 tw-font-bold tw-leadding-[19px] tw-tracking-[3.46px]"
            >
              <li class="tw-flex tw-gap-x-[6px]">
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
              </li>
              <li class="tw-flex tw-gap-x-[6px]">
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
              </li>
              <li class="tw-flex tw-gap-x-[6px]">
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
                <div
                  class="tw-w-2 tw-h-2 md:tw-w-[9px] md:tw-h-[10px] tw-bg-white tw-rounded-full"
                ></div>
              </li>
              <li>2022</li>
            </ul>
          </div>

          <!-- exp date -->
          <div
            class="tw-flex tw-items-center tw-gap-x-[30px] tw-mt-[13px] md:tw-mt-[17px] tw-leading-6 tw-text-13 tw-font-bold"
          >
            <div class="tw-leading-[18px] tw-tracking-[1.56px]">Thru: 12/20</div>
            <div class="tw-flex tw-items-center">
              <span class="tw-tracking-[0.31px]">CVV:</span>
              <span class="tw-text-24 tw-tracking-[2.88px] tw-ml-1">
                &lowast;&lowast;&lowast;
              </span>
            </div>
          </div>

          <!-- footer logo -->
          <div class="tw-flex tw-justify-end">
            <Visa classes="tw-fill-current" width="59px" height="20px" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
