<template>
  <div class="wrapper">
    <van-cell-group inset>
      <van-field v-model="sms" center placeholder="请输入短信验证码">
        <template #button>
          <van-button
            size="small"
            type="primary"
            @click="handleBtnClick"
            :disabled="isCountDown"
          >
            <div v-if="!isCountDown">{{ btnText }}</div>
            <van-count-down
              v-else
              :time="time"
              format="ss s"
              @finish="onCountDownFinish"
            />
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script setup>
  import { defineOptions, ref } from "vue";

  let sms = ref("");
  let btnText = ref("获取验证码");
  let isCountDown = ref(false);
  let handleBtnClick = () => {
    isCountDown.value = true;
  };
  let onCountDownFinish = () => {
    isCountDown.value = false;
  };
  const time = ref(5 * 1000);

  defineOptions({
    name: "CountDownCell",
  });
</script>

<style lang="scss" scoped></style>
