<script lang="ts" setup>
import CardTabs from '@/components/CardTabs.vue';
import CardCarousel from '@/components/CardCarousel.vue';
import AccountBalance from '@/components/AccountBalance.vue';
import CardController from '@/components/CardController.vue';
import CardDetails from '@/components/CardDetails.vue';
</script>

<template>
  <div class="tw-text-white tw-bg-primary md:tw-text-black md:tw-bg-white md:tw-p-[60px]">
    <AccountBalance />

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
          <CardController />
        </div>

        <!-- card detail and transactions -->
        <CardDetails />
      </div>
    </div>
  </div>
</template>
