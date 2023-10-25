<template>
  <div class="nav-bar-container">
    <van-nav-bar
      title="标题"
      left-text="返回"
      v-bind="$attrs"
      left-arrow
      :fixed="true"
      :border="false"
    >
    </van-nav-bar>
  </div>
</template>

<script setup>
// https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar
import { defineOptions } from "vue";

defineOptions({
  name: "NavBar",
});
</script>

<style lang="scss" scoped>
.nav-bar-container {
  height: var(--van-nav-bar-height);
}
</style>
