<template>
  <keep-alive>
    <HelloWorld v-if="visible" context="inline" />
  </keep-alive>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "KeepAliveInline",
  components: {
    HelloWorld,
  },
  props: {
    visible: Boolean,
  },
};
</script>
