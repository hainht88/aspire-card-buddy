<template>
  <svg :class="classes" :height="height" :width="width" :viewBox="viewBox">
    <g>
      <slot />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  classes: {
    type: String,
    default: 'fill-primary',
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
    default: '0 0 24 24',
  },
});
</script>
