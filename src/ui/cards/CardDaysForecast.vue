<template>
  <div class="days">
    <h2 class="days__title">5 Days Forecast:</h2>
    <ul v-if="getDaysForecast" class="days__forecast">
      <li v-for="(item, i) in getDaysForecast" :key="item.id" class="days__forecast-day">
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
.days {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 414px; 

  &__title {
    font-size: 32px;
  }

  &__forecast-day {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  &__forecast-icon {
    width: 60px;
  }

  &__forecast-temperature {
    margin: 0 43px;
    font-size: 24px;
  }

  &__forecast-date {
    font-size: 20px;
    margin: 0 auto;
  }
}

</style>
