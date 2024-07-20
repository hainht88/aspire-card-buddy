<script lang="ts" setup>
import Logo from '@/components/icons/Logo.vue';
import PlusInside from '@/components/icons/PlusInside.vue';
import CardTabs from '@/components/CardTabs.vue';
import CardCarousel from '@/components/CardCarousel.vue';
</script>

<template>
  <div class="tw-text-white tw-bg-primary md:tw-text-black md:tw-bg-white md:tw-p-[60px]">
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

    <!-- Card tabs -->
    <CardTabs class="tw-px-6 md:tw-px-0" />

    <!-- Card content-->
    <div class="tw-mt-4 md:tw-shadow-main md:tw-rounded-lg md:tw-px-10">
      <!-- left/right -->
      <div class="tw-grid xl:tw-grid-cols-[414px_auto] xl:tw-gap-[46px]">
        <div>
          <!-- card info -->
          <div
            class="tw-flex tw-flex-col tw-mx-6 tw-justify-center tw-items-center w-full md:tw-mx-0"
          >
            <!-- card carousel -->
            <CardCarousel />
          </div>

          <!-- card controller -->
          <div
            class="tw-h-[116px] tw-w-full tw-bg-gray-2 tw-mt-6 tw-rounded-t-xl md:tw-ml-10 w-full"
          ></div>
        </div>

        <!-- card detail and transactions -->
        <div
          class="tw-h-[800px] tw-w-full tw-bg-gray-2 tw-mt-6 md:tw-mt-[60px] tw-rounded-t-xl"
        ></div>
      </div>
    </div>
  </div>
</template>
