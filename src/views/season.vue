<template>
  <div class="page">
    <!-- 搜索 -->
    <div class="cook_saerch">
      <Search v-model="searchValue" placeholder="请输入搜索关键词" />
    </div>
    <div class="content">
      <Sidebar v-model="active">
        <SidebarItem v-for="item in 12" :title="item + '月'" />
      </Sidebar>
      <div class="sidebar_right">
        <div v-for="(item, index) in rightData" :key="index">
          <SingleFoodItem :data="item" :month="index + 1" />
        </div>
      </div>
    </div>

    <BaseFooter />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import BaseFooter from "../components/base-footer/base-footer.vue";
import SingleFoodItem from "../components/single-food-item/single-food-item.vue";
import { Search } from "vant";
import { Sidebar, SidebarItem } from "vant";
const searchValue = ref("");

const active = ref("");

const rightData = reactive([
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
  {
    fruits: ["甘蔗", "柠檬", "橙子", "青枣"],
    vegetable: ["白菜", "春笋", "胡萝卜", "韭菜", "小白菜", "蒜黄", "香菇", "豆瓣菜"],
    nut: ["腰果"],
  },
]);
</script>

<style lang="scss">
.content {
  overflow: auto;
  display: flex;
}
.sidebar_right {
}
</style>
