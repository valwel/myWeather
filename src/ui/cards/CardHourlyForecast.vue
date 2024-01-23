<template>
  <div class="hourly">
    <h2 class="hourly__title">Hourly Forecast:</h2>
    <ul v-if="getHourlyForecast" class="hourly__list">
      <li v-for="(items, i) in getHourlyForecast" :key="items.id" class="hourly__item">
        <div class="hourly__time">{{ getHourlyForecast[i].time }}</div>
        <div class="hourly__icon"><img :src="`https://openweathermap.org/img/wn/${getHourlyForecast[i].icon}@2x.png`" alt=""></div>
        <div class="hourly__temperature">{{ formatTemperature(getHourlyForecast[i].temperature) }}</div>
        <div class="hourly__wind"><img :style="`transform: rotate(${getHourlyForecast[i].windDeg + 180}deg)`" src="@/assets/images/navigation.svg" alt=""></div>
        <div class="hourly__speed">{{ getHourlyForecast[i].windSpeed }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/store/weatherStore';
import { formatTemperature } from "@/utils/formatTemperature";
import { storeToRefs } from 'pinia';

const store = useWeatherStore();
const { getHourlyForecast } = storeToRefs(store);
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardHourlyForecast.scss";
</style>