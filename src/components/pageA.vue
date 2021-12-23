<template>
  <div>pageA Hello!</div>
</template>

<script>
export default {
  name: "pageA",
  mounted() {
    console.log("pageA mounted: ");
  },
  unmounted(){
    console.log("pageA unmounted: ");

  }
};
</script>
