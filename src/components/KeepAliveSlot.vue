<template>
  <keep-alive>
    <slot v-if="visible" context="slot" />
  </keep-alive>
</template>

<script>
export default {
  name: "KeepAliveSlot",
  props: {
    visible: Boolean,
  },
};
</script>
