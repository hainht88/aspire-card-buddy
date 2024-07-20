<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Logo from '@/components/icons/Logo.vue';
import Card from '@/components/icons/Card.vue';
import Payment from '@/components/icons/Payment.vue';
import Credit from '@/components/icons/Credit.vue';
import Account from '@/components/icons/Account.vue';

const routes = [
  {
    to: '/home',
    icon: Logo,
    name: 'Home',
  },
  {
    to: '/',
    icon: Card,
    name: 'Card',
  },
  {
    to: '/home',
    icon: Payment,
    name: 'Payments',
  },
  {
    to: '/home',
    icon: Credit,
    name: 'Credit',
  },
  {
    to: '/home',
    icon: Account,
    name: 'Profile',
  },
];
</script>

<template>
  <div
    class="tw-shadow-menu tw-w-full tw-h-16 tw-bg-white md:tw-mt-[81px] md:tw-border-0 md:tw-bg-transparent md:tw-bottom-auto md:tw-left-auto md:tw-shadow-none"
  >
    <ul
      class="tw-flex tw-flex-row tw-justify-between tw-items-center md:tw-items-start tw-h-full tw-mx-[30px] md:tw-mx-0 md:tw-flex-col md:tw-gap-[60px]"
    >
      <li v-for="(route, idx) of routes" :key="idx">
        <RouterLink
          :to="route.to"
          class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-text-gray-1 hover:tw-text-secondary tw-gap-1 md:tw-gap-4"
          activeClass="tw-text-secondary tw-font-bold"
        >
          <component :is="route.icon" classes="tw-fill-current" width="24px" height="24px" />
          <span class="tw-text-9 tw-leading-[13px] md:tw-text-16 md:tw-leading-8">{{
            route.name
          }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
