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
import { useWeatherStore } from "@/store/weatherStore";
import { formatTemperature } from "@/utils/formatTemperature";
import { storeToRefs } from "pinia";

const store = useWeatherStore();
const { getDaysForecast } = storeToRefs(store);
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardDaysForecast.scss";
</style>
