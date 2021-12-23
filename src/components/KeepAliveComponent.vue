<template>
  <keep-alive>
    <component v-if="visible" :is="componentName" context="component" />
  </keep-alive>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "KeepAliveComponent",
  components: {
    HelloWorld,
  },
  props: {
    componentName: {
      type: String,
      required: true,
    },
    visible: Boolean,
  },
};
</script>
