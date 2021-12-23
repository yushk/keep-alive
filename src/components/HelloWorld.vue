<template>
  <div>Hello!</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    context: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("mounted: " + this.context);
  },
};
</script>
