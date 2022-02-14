<template>
  <p>{{ moth }}月份应季果蔬</p>
  <p>水果</p>
  <div>
    <span v-for="item2 in data.fruits" :key="item2" @click="goDetail(item2)">{{ item2 }}</span>
  </div>
  <p>蔬菜</p>
  <div>
    <span v-for="item2 in data.vegetable" :key="item2" @click="goDetail(item2)">{{ item2 }}</span>
  </div>
  <p>坚果</p>
  <div>
    <span v-for="item2 in data.nut" :key="item2" @click="goDetail(item2)">{{ item2 }}</span>
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
</script>
<style></style>
