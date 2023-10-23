<template>
  <div class="text-xl">Hello Vue.js! {{ $t("menu.result") }}</div>
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "Home",
});
</script>

<style lang="scss" scoped>
div {
  color: $purple;
}
</style>
