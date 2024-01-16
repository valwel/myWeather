<template>
  <div class="days">
    <h2 class="days__title">5 Days Forecast:</h2>
    <ul v-if="data" class="days__forecast">
      <li v-for="(items, i) in data" :key="items.id" class="days__forecast-day">
        <div class="days__forecast-icon">
          <img :src="`https://openweathermap.org/img/wn/${data[i].icon}@2x.png`" alt="" />
        </div>
        <div class="days__forecast-temperature">{{ formatTemperature(data[i].temperature) }}</div>
        <div class="days__forecast-date">{{ data[i].date }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { loadForecast } from "@/api/forecastService";
// import { daysForecast } from "@/api/forecastService";
import { IDaysForecast } from "@/models/forecastService.interface";
import { formatTemperature } from "@/utils/formatTemperature";
import { onBeforeMount, ref } from "vue";
const data = ref<IDaysForecast[]>();
onBeforeMount(async () => {
  const {daysForecast} = await loadForecast()
  data.value = daysForecast
  console.log(data)
})
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardDaysForecast.scss";
</style>
