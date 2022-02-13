<template>
  <!-- 搜索 -->
  <!-- 分类区域 -->
  <div class="cook_cate">
    <div class="cook_cate_item" v-for="item in cateData" :key="item.id">
      <BaseSvg size="16" name="icon-chaocai-"></BaseSvg>
      <span>{{ item.name }}</span>
    </div>
  </div>
  <!-- 好菜推荐 -->
  <h3>好菜推荐</h3>
  <div class="cook_recommend">
    <div class="cook_recommend_item" v-for="item in 10">
      <img src="../assets/images/hongshaorou.jpg" alt="" />
            <p class="cook_name">红烧肉</p>
      <div class="cook_relation"><span>3万浏览</span><span>42211收藏</span></div>
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
.cook_cate {
  display: flex;
  flex-wrap: wrap;
  .cook_cate_item {
    width: 25%;
    text-align: center;
    span {
      display: block;
    }
  }
}
.cook_recommend {
  display: flex;
  flex-wrap: wrap;
  .cook_recommend_item {
    width: 40%;
    margin: 0 18px;
    img {
      border-radius: 10px;
      width: 100%;
    }
    .cook_name {
      font-weight: 700;
      font-size: 16px;
    }
    .cook_relation {
      font-size: 12px;
      color: #6e6e6e;
    }
  }
}
</style>
