<template>
  <div class="days">
    <h2 class="days__title">5 Days Forecast:</h2>
    <ul v-if="getDaysForecast" class="days__forecast">
      <li v-for="(items, i) in getDaysForecast" :key="items.id" class="days__forecast-day">
        <div class="days__forecast-icon">
          <img :src="`https://openweathermap.org/img/wn/${getDaysForecast[i].icon}@2x.png`" alt="" />
        </div>
        <div class="days__forecast-temperature">{{ formatTemperature(getDaysForecast[i].temperature) }}</div>
        <div class="days__forecast-date">{{ getDaysForecast[i].date }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { loadForecast } from "@/api/forecastService";
// import { daysForecast } from "@/api/forecastService";
import { IDaysForecast } from "@/models/forecastService.interface";
import { useWeatherStore } from "@/store/weatherStore";
import { formatTemperature } from "@/utils/formatTemperature";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";
const data = ref<IDaysForecast[]>();
const store = useWeatherStore();
const { getDaysForecast } = storeToRefs(store);
console.log(getDaysForecast)
// onBeforeMount(async () => {
//   const {daysForecast} = await loadForecast()
//   data.value = daysForecast
//   console.log(data)
// })
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardDaysForecast.scss";
</style>
