<script setup lang="ts">
import {ref} from 'vue'
  import { useIndexStore } from "../../store/index";

  const indexStore = useIndexStore();

  const date = ref(new Date().toLocaleString().slice(0, 10))
  const time = ref(new Date().toLocaleTimeString('en-US').slice(0, 4))
  
</script>

<template>
  <div
    class="md:w-1/3 p-3 md:py-5 md:px-5 lg:px-10 md:rounded-r-3xl md:rounded-s-3xl bg-white h-[100vh]"
  >
    <div class="flex text-[4rem] md:text-[6rem] font-extralight">
      <!-- <h2>{{indexStore?.dataApi?.list[0]?.main?.temp ? indexStore?.dataApi?.list[0]?.main?.temp : '0'}}</h2> -->
      <p class="text-[3rem] md:text-[4rem] md:leading-normal">°C</p>
    </div>
    <div class="grid lg:flex justify-between">
      <h1 class="text-xl font-bold">{{indexStore.dataApi.city?.name}}</h1>
      <div class="flex">
        <p class="text-lg font-thin">{{date}}</p>
      </div>
    </div>
    <hr />
    <div class="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        ></path>
      </svg>
      <h3 class="flex-1">Patchy Drizzle Day</h3>
    </div>
    <div class="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 class="flex-1">{{time}}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
