<template>
  <KeepAliveInline :visible="visible" />
  <KeepAliveSlot :visible="visible">
    <HelloWorld context="slot" />
  </KeepAliveSlot>
  <KeepAliveComponent :visible="visible" component-name="HelloWorld" />
  <input type="button" @click="toggle" value="toggle" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import KeepAliveComponent from "./components/KeepAliveComponent.vue";
import KeepAliveInline from "./components/KeepAliveInline.vue";
import KeepAliveSlot from "./components/KeepAliveSlot.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    KeepAliveComponent,
    KeepAliveInline,
    KeepAliveSlot,
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>

