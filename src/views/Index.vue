<template>
  <div class="page">
    <!-- 搜索 -->
    <div class="cook_saerch">
      <Search v-model="searchValue" placeholder="请输入搜索关键词" />
    </div>
    <!-- 分类区域 -->
    <div class="cook_cate">
      <div v-for="item in cateData" :key="item.id" class="cook_cate_item">
        <BaseSvg size="16" name="icon-chaocai-"></BaseSvg>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <!-- 好菜推荐 -->
    <h3 class="cool_recommend_tip">
      <span>好菜推荐</span>
      <BaseSvg size="16" name="icon-chaocai-"></BaseSvg>
    </h3>
    <div class="cook_recommend">
      <div v-for="item in 10" :key="item" class="cook_recommend_item">
        <img src="../assets/images/hongshaorou.jpg" alt="" />
        <p class="cook_name">红烧肉</p>
        <div class="cook_relation"><span>32万浏览</span><span>42211收藏</span></div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Search } from "vant";
import BaseFooter from "../components/base-footer/base-footer.vue";

const searchValue = ref("");
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
.page {
  display: flex;
  flex-direction: column;
}
.cook_saerch {
  text-align: center;
  padding: 20px;
  input {
    width: 280px;
  }
}
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
.cool_recommend_tip {
  font-weight: 700;
  padding: 12px 0 8px 20px;
  display: flex;
  justify-content: space-between;
}
.cook_recommend {
  overflow: auto;
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
