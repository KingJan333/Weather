<script setup lang="ts">
  import { useIndexStore } from "../../store/index";

  const indexStore = useIndexStore();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      class="bg-white rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center space-y-4"
        v-for="el in indexStore.dataApi.list" :key="el"
    >
      <span class="text-gray-400 w-full">{{el.wind}}</span>
      <div class="flex items-end">
        <p class="text-[4rem] font-light">{{el.wind.speed}}</p>
        <div class="mb-5">km/h</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
