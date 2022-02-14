<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const obj = reactive({ count: { a: 2 } });

watch(
  () => obj,
  (newValue, oldValue) => {
    // fires on nested property mutations
    // Note: `newValue` will be equal to `oldValue` here
    // because they both point to the same object!
    console.log("变化了啊", newValue, oldValue);
  },
  { deep: true },
);
// watch(obj, (newValue, oldValue) => {
//   // fires on nested property mutations
//   // Note: `newValue` will be equal to `oldValue` here
//   // because they both point to the same object!
//   console.log('变化了啊',newValue,oldValue);
// });

setInterval(() => {
  obj.count.a++;
}, 1000);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
