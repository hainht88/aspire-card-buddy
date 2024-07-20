<template>
  <BaseIcon :class="classes" :viewBox="viewBox" :width="width" :height="height">
    <g transform="translate(213 -305)">
      <g transform="translate(-203.25 314.5)">
        <path
          class="b"
          d="M60.988,47.06a8.1,8.1,0,0,0-.106-1.311h-6.01v2.487h3.443A3,3,0,0,1,57.041,50.2v1.616h2.053A6.352,6.352,0,0,0,60.988,47.06Z"
          transform="translate(-48.497 -40.451)"
        />
        <path
          class="c"
          d="M12.231,71.408a6.045,6.045,0,0,0,4.222-1.562L14.4,68.23a3.78,3.78,0,0,1-2.168.619,3.82,3.82,0,0,1-3.576-2.666H6.54v1.67A6.356,6.356,0,0,0,12.231,71.408Z"
          transform="translate(-5.856 -58.48)"
        />
        <path
          class="d"
          d="M3.532,35.172a3.954,3.954,0,0,1,0-2.478V31.033H1.417a6.492,6.492,0,0,0,0,5.8Z"
          transform="translate(-0.733 -27.468)"
        />
        <path
          class="e"
          d="M12.231,3.318a3.4,3.4,0,0,1,2.443.97L16.5,2.438A6.1,6.1,0,0,0,12.231.76,6.365,6.365,0,0,0,6.54,4.324l2.115,1.67A3.816,3.816,0,0,1,12.231,3.318Z"
          transform="translate(-5.856 -0.759)"
        />
      </g>
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
    default: '0 0 32 32',
  },
});
</script>
