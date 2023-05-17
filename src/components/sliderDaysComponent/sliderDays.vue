<script setup lang="ts">
  import { useIndexStore } from "../../store/index";

  const indexStore = useIndexStore();
</script>

<template>
  <div
    class="flex justify-between overflow-x-scroll w-screen md:w-full p-2 md:p-6 pl-0"
  >
    <div
      class="flex flex-col space-y-2 m-2 bg-white shadow-lg py-6 px-9 rounded-lg justify-center items-center transition-all hover:translate-y-5"
        v-for="day in indexStore.dataApi.list" :key="day"
    >
      <span>{{day.dt_txt}}</span>
      <span>{{day.weather[0].main}}</span>
      <span>{{day.main.temp}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
