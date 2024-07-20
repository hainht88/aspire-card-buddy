<template>
  <BaseIcon :class="classes" :viewBox="viewBox" :width="width" :height="height">
    <g transform="translate(0 -84.598)">
      <path
        class="a"
        d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
        transform="translate(0 -125.106)"
      />
      <path
        class="a"
        d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
        transform="translate(0 -0.736)"
      />
    </g>
  </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  classes: {
    type: String,
    default: 'tw-text-primary',
  },
  width: {
    type: String,
    default: '24px',
  },
  height: {
    type: String,
    default: '24px',
  },
  viewBox: {
    type: String,
    default: '0 0 10 7.862',
  },
});
</script>
