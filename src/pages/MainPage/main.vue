<script setup lang="ts">
  import { defineComponent } from "vue";
  import mainWeather from "@/components/mainWeatherComponent/mainWeather.vue";
  import headWeather from "@/components/headWeatherComponent/headWeather.vue";
  import sliderDays from "@/components/sliderDaysComponent/sliderDays.vue";
  import detailWeather from '@/components/infoDetailWeatherComponent/infoDetailWeather.vue'

  import { dataWeatherAsync } from "../../api/api";
  import { useIndexStore } from "../../store/index";

  const indexStore = useIndexStore();

  const dataWeather = () => {
    dataWeatherAsync()
      .then((response) => {
        console.log(response);
        indexStore.dataApi = response.data;
      })
      .catch((err) => console.log(err));
  };
  dataWeather();
</script>

<template>
  <div class="container md:flex max-w-screen-2xl mx-auto overflow-x-hidden">
    <mainWeather />
    <div
      class="md:w-2/3 bg-gray-100 dark:bg-black2 py-5 px-5 lg:px-10 md:overflow-y-scroll"
    >
      <headWeather />
      <sliderDays />
      <detailWeather />
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    margin: 0 2px;
  }
</style>
