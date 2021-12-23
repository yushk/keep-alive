<template>
  <div>pageB Hello!</div>
</template>

<script>
export default {
  name: "pageB",
  mounted() {
    console.log("pageB mounted: " );
  },
  unmounted(){
    console.log("pageB unmounted: ");

  }
};
</script>
