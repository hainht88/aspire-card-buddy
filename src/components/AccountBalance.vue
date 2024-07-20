<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue';
import PlusInside from '@/components/icons/PlusInside.vue';
</script>

<template>
  <!-- logo -->
  <div
    class="tw-h-14 tw-flex tw-flex-row tw-justify-end tw-items-center tw-mr-6 tw-text-secondary md:tw-hidden"
  >
    <Logo classes="tw-fill-current" width="25px" height="25px" />
  </div>

  <!-- account balance -->
  <div class="tw-mt-[-25px] md:tw-mt-0 tw-px-6 md:tw-px-0">
    <div class="tw-text-14 tw-leading-4 tw-font-semibold">Account balance</div>
    <div class="tw-mt-4 tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full">
      <div class="tw-flex tw-justify-center tw-items-center tw-leading-4 tw-font-bold">
        <div
          class="tw-text-white tw-mr-[10px] tw-flex tw-justify-center tw-items-center tw-border tw-border-secondary tw-rounded tw-bg-secondary tw-w-10 tw-h-[22px] tw-text-12 md:tw-text-13 md:tw-h-6 md:tw-mr-3"
        >
          S$
        </div>
        <span class="tw-text-26">3,000</span>
      </div>
      <button
        class="tw-h-[35px] tw-w-[109px] tw-ml-auto tw-text-accent tw-text-13 tw-font-bold tw-leading-[18px] md:tw-border md:tw-rounded tw-flex tw-justify-end tw-items-center md:tw-bg-primary-light md:tw-text-white md:hover:tw-opacity-80 md:tw-justify-center"
      >
        <PlusInside classes="tw-fill-current" width="16px" height="16px" />
        <div class="tw-ml-[6px] md:tw-ml-2">New card</div>
      </button>
    </div>
  </div>
</template>
