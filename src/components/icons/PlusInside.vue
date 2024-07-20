<template>
  <BaseIcon :class="classes" :viewBox="viewBox" :width="width" :height="height">
    <g transform="translate(-27.3 -0.445)">
      <path
        class="b"
        d="M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0Zm3.063,7.583H7.583v2.479a.583.583,0,1,1-1.167,0V7.583H3.938a.583.583,0,1,1,0-1.167H6.417V3.938a.583.583,0,1,1,1.167,0V6.417h2.479a.583.583,0,1,1,0,1.167Zm0,0"
        transform="translate(28.3 1.445)"
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
    default: '0 0 16 16',
  },
});
</script>
