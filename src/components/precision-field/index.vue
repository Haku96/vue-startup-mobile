<template>
  <van-field
    label="金额"
    type="number"
    placeholder="金额"
    v-model="money"
    v-float="{ limit: 2, min: 0, max: 999999999 }"
  />
</template>

<script setup>
  import { ref, defineOptions } from "vue";

  defineOptions({
    name: "PrecisionField",
  });

  let money = ref("");

  const vFloat = {
    beforeMount: (el, bind) => {
      const input =
        el.nodeName.toLowerCase() === "input"
          ? el
          : el.getElementsByTagName("input")[0];
      // 改变值过后，需要主动触发input时间，组件绑定的值才会改变
      let triggerBySelf = false;
      console.log("fsaf");
      if (input) {
        input.addEventListener("input", () => {
          if (triggerBySelf) {
            triggerBySelf = false;
            return;
          }
          // 将千分为值转换成正常的数值，如果input type为number 不需要千分位，可把第一个repalce正则删除
          let val = input.value.replace(/,/gi, "").replace(/[^0-9.]/gi, "");
          // 验证数字
          if (val === "") {
            input.value = "";
            return;
          }
          const valArr = val.split(".");

          console.log(bind, "==>bind");
          try {
            const option = bind.value;
            if (typeof option === "object") {
              const { limit, min, max } = option;
              if (limit !== undefined) {
                if (valArr.length > 1) {
                  let pointLength = valArr[1].length;
                  pointLength = limit > pointLength ? pointLength : limit;
                  if (limit > 0) {
                    val =
                      +valArr[0] +
                      (valArr.length > 1
                        ? `.${valArr[1].substr(0, pointLength)}`
                        : "");
                  } else {
                    val = +valArr[0] + "";
                  }
                } else {
                  val = +val + "";
                }
              }
              if (typeof min === "number" && +val < +min) {
                val = min + "";
              }
              // 数值大于最大值，不可再输入
              if (typeof max === "number" && +val > +max) {
                //以下控制显示的最大数为当前输入的可取最大值
                let nVal = val.split(".")[0];
                const pointVal = val.split(".")[1] ? val.split(".")[1] : "";
                const maxStringLength = String(max).split(".")[0].length;
                nVal = nVal.slice(0, maxStringLength);
                val = nVal + "." + pointVal;
                //以下是当值大于最大值 直接赋值为最大值
                // val = max + "";
              }
              //数值转换为千分为，如果不需要千分位展示 可以直接删除
              val = String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              // 改变值过后，需要主动触发input时间，组件绑定的值才会改变
              const ev = new Event("input", { bubbles: true });
              input.value = val;
              triggerBySelf = true;
              input.dispatchEvent(ev);
            }
          } catch (err) {
            input.value = val;
            console.error(err);
          }
        });
      }
    },
  };
</script>

<style lang="scss" scoped></style>
