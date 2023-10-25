<template>
  <nav-bar @click-left="handleLeftClick">123456</nav-bar>
  <count-down-cell></count-down-cell>
  <PrecisionField></PrecisionField>
  <div class="text-xl text-center">Hello Vue.js!</div>
</template>

<script setup>
  import { defineOptions } from "vue";

  defineOptions({
    name: "Home",
  });

  const handleLeftClick = (e) => {
    console.log("10086", e);
  };
</script>

<style lang="scss" scoped>
  div {
    color: $purple;
  }
</style>
