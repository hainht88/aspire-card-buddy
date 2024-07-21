<script setup lang="ts">
import MainNavBar from '@/components/MainNavBar.vue';
import MainAccount from '@/components/MainAccount.vue';
</script>

<template>
  <div
    class="tw-w-screen md:tw-min-h-screen tw-grid tw-grid-cols-1 md:tw-grid-cols-[280px_auto] lg:tw-grid-cols-[340px_auto]"
  >
    <MainNavBar />
    <MainAccount />
  </div>
</template>
