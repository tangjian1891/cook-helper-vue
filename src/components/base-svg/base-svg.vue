<template>
  <svg :class="['icon', svgSize]" aria-hidden="true">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

// 全局的svg调用 eg:  <base-svg name="logo" />
const props = defineProps(["name", "size"]);
const svgSize = computed<string>(() => {
  return props.size ? "svg_size_" + props.size : ""; // 设置svg的大小.返回的是一个class类
});
</script>

<style>
.svg_size_12 {
  font-size: 12px;
}
.svg_size_14 {
  font-size: 14px;
}
.svg_size_15 {
  font-size: 15px;
}
.svg_size_16 {
  font-size: 16px;
}
.svg_size_20 {
  font-size: 20px;
}
.svg_size_24 {
  font-size: 24px;
}
.svg_size_30 {
  font-size: 30px;
}
.svg_size_44 {
  font-size: 44px;
}
</style>
