<template>
  <Tabbar v-model="active" :route="true">
    <TabbarItem :to="{ name: 'index' }" icon="home-o">首页</TabbarItem>
    <TabbarItem :to="{ name: 'season' }" icon="search">时令时蔬</TabbarItem>
    <TabbarItem :to="{ name: 'profile' }" icon="friends-o">我的</TabbarItem>
  </Tabbar>
</template>
<script lang="ts" setup>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
const active = ref(0);
</script>
<style></style>
