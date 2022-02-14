<template>
  <Tabbar v-model="active">
    <TabbarItem icon="home-o">首页</TabbarItem>
    <TabbarItem icon="search">科普</TabbarItem>
    <TabbarItem icon="friends-o">我的</TabbarItem>
  </Tabbar>
</template>
<script lang="ts" setup>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
const active = ref(0);
</script>
<style></style>
