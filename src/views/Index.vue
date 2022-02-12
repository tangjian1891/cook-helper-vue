<template>
  <!-- 搜索 -->
  <!-- 分类区域 -->
  <div class="cook_cate">
    <div v-for="item in cateData" :key="item.id">
      <BaseSvg size="16" name="icon-chaocai-"></BaseSvg>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const cateData = reactive([
  { name: "凉菜", id: "1" },
  { name: "面食", id: "2" },
  { name: "汤", id: "3" },
  { name: "粥", id: "4" },
  { name: "炒菜", id: "5" },
  { name: "素菜", id: "6" },
  { name: "蛋糕", id: "7" },
  { name: "全部分类", id: "8" },
]);
</script>

<style lang="scss">
// .cook_cate {
// }
</style>
