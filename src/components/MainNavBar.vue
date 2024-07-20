<script lang="ts" setup>
import LogoWithText from '@/components/icons/LogoWithText.vue';
import MainNavigator from '@/components/MainNavigator.vue';
</script>

<template>
  <div
    class="tw-fixed tw-z-10 tw-bottom-0 tw-left-0 tw-w-full tw-bg-white tw-text-white tw-p-0 md:tw-static md:tw-bg-primary md:tw-p-[48px]"
  >
    <!-- logo and slogan -->
    <div class="tw-hidden md:tw-block">
      <LogoWithText classes="tw-fill-secondary" width="125px" height="35px" viewBox="0 0 125 35" />
      <div class="tw-mt-[19px] tw-text-white/30 tw-text-15 tw-leading-5">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
    </div>

    <!-- navigator -->
    <MainNavigator />
  </div>
</template>
