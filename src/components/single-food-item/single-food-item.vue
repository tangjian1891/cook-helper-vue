<template>
  <p>{{ moth }}月份应季果蔬</p>
  <div v-for="(item, key) in data" :key="key" class="food_area">
    <p>{{ filterName(key) }}</p>
    <div v-for="item2 in item" :key="item2" class="food_area_item" @click="goDetail(item2)">
      <img class="food_area_item_img" src="~@/assets/images/ganzhe.jpg" alt="" />
      <span class="food_area_item_text">{{ item2 }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

defineProps(["data", "moth"]);
const router = useRouter();
const goDetail = name => {
  router.push({
    name: "season-detail",
    query: {
      name,
    },
  });
};

const filterName = key => {
  console.log(key);
  switch (key) {
    case "fruits":
      return "水果";
    case "vegetable":
      return "蔬菜";
    case "nut":
      return "坚果";
  }
};
</script>
<style lang="scss">
.food_area {
  display: flex;
  flex-wrap: wrap;
}
.food_area_item {
  margin: 10px;
  text-align: center;
  .food_area_item_img {
    display: block;
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
  }
  .food_area_item_text {
    font-size: 16px;
  }
}
</style>
