<template>
  <div class="hourly">
    <h2 class="hourly__title">Hourly Forecast:</h2>
    <ul v-if="data" class="hourly__list">
      <li v-for="(items, i) in data" :key="items.id" class="hourly__item">
        <div class="hourly__time">{{ data[i].time }}</div>
        <div class="hourly__icon"><img :src="`https://openweathermap.org/img/wn/${data[i].icon}@2x.png`" alt=""></div>
        <div class="hourly__temperature">{{ formatTemperature(data[i].temperature) }}</div>
        <div class="hourly__wind"><img :style="`transform: rotate(${data[i].windDeg + 180}deg)`" src="@/assets/images/navigation.svg" alt=""></div>
        <div class="hourly__speed">{{ data[i].windSpeed }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { loadForecast } from '@/api/forecastService';
import { IHourlyForecast } from '@/models/forecastService.interface';
import { formatTemperature } from "@/utils/formatTemperature";
import { onBeforeMount, ref } from "vue";
const data = ref<IHourlyForecast[]>();
onBeforeMount(async () => {
  const {hourlyForecast} = await loadForecast();
  data.value = hourlyForecast;
})
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardHourlyForecast.scss";
</style>