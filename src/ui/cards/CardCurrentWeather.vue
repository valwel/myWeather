<template>
  <div v-if="getCurrentWeather" class="current">
    <div class="current__wrapper">
      <div class="current__temperature">
        <div class="current__temperature-now">
          {{ formatTemperature(getCurrentWeather.temp) }}
        </div>
        <div class="current__temperature-feels">
          Feels like:
          <span>{{ formatTemperature(getCurrentWeather.feelsLike) }}</span>
        </div>
      </div>
      <div class="current__sun">
        <div class="current__sun-sunrise">
          <div class="current__sun-icon">
            <img src="@/assets/images/sunrise.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunrise</div>
          <div class="current__sun-time">
            {{ new Date(getCurrentWeather.sunrise).toLocaleTimeString() }}
          </div>
        </div>
        <div class="current__sun-sunrise">
          <div class="current__sun-icon">
            <img src="@/assets/images/sunset.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunset</div>
          <div class="current__sun-time">
            {{ new Date(getCurrentWeather.sunset).toLocaleTimeString() }}
          </div>
        </div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__cloudiness">
        <div class="current__cloudiness-icon">
          <img :src="`https://openweathermap.org/img/wn/${getCurrentWeather.icon}@2x.png`" alt="" />
        </div>
        <div class="current__cloudiness-title">{{ getCurrentWeather.description }}</div>
      </div>
    </div>
    <div class="current__wrapper">
      <div  class="current__information">
        <div class="current__information-data" v-for="(items, i) in getCurrentWeather.information" :key="items.title">
          <div class="current__imformation-icon">
            <img :src="getCurrentWeather.information[i].icon" alt="" />
          </div>
          <div class="current__imformation-template">
            {{ getCurrentWeather.information[i].template }}
          </div>
          <div class="current__imformation-title">
            {{ getCurrentWeather.information[i].title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatTemperature } from "@/utils/formatTemperature";
import { useWeatherStore } from "@/store/weatherStore";
import { storeToRefs } from 'pinia'

const store = useWeatherStore();
const { getCurrentWeather } = storeToRefs(store);
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardCurrentWeather.scss";
</style>
