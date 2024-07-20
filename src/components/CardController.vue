<script setup lang="ts">
const controllers = [
  {
    id: 'freezeCard',
    label: 'Freeze card',
    src: new URL('../assets/FreezeCard.svg', import.meta.url).href,
  },
  {
    id: 'setSpendLimit',
    label: 'Set spend limit',
    src: new URL('../assets/SetSpendLimit.svg', import.meta.url).href,
  },
  {
    id: 'gPlay',
    label: 'Add to GPay',
    src: new URL('../assets/GPay.svg', import.meta.url).href,
  },
  {
    id: 'replaceCard',
    label: 'Replace card',
    src: new URL('../assets/ReplaceCard.svg', import.meta.url).href,
  },
  {
    id: 'cancelCard',
    label: 'Cancel card',
    src: new URL('../assets/CancelCard.svg', import.meta.url).href,
  },
]
</script>

<template>
  <div class="tw-min-h-[116px] tw-w-full tw-bg-gray-2 tw-mt-6 lg:tw-mb-6 tw-rounded-t-xl md:tw-rounded-b-xl tw-flex tw-justify-between tw-items-center tw-px-[27px] tw-py-[21px]">
    <div class="tw-flex tw-flex-col tw-justify-between tw-items-center" v-for="(controller, index) of controllers" :key="index">
      <q-img class="tw-mb-[7px]" width="32px" height="32px" :src="controller.src" />
      <span class="tw-text-13 tw-font-normal tw-leading-[14px] tw-text-primary tw-text-center">{{ controller.label }}</span>
    </div>
  </div>
</template>
