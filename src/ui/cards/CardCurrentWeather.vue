<template>
  <div v-if="data" class="current">
    <div class="current__wrapper">
      <div class="current__temperature">
        <div class="current__temperature-now">
          {{ formatTemperature(data.temp) }}
        </div>
        <div class="current__temperature-feels">
          Feels like:
          <span>{{ formatTemperature(data.feelsLike) }}</span>
        </div>
      </div>
      <div class="current__sun">
        <div class="current__sun-sunrise">
          <div class="current__sun-icon">
            <img src="@/assets/images/sunrise.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunrise</div>
          <div class="current__sun-time">
            {{ new Date(data.sunrise).toLocaleTimeString() }}
          </div>
        </div>
        <div class="current__sun-sunrise">
          <div class="current__sun-icon">
            <img src="@/assets/images/sunset.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunset</div>
          <div class="current__sun-time">
            {{ new Date(data.sunset).toLocaleTimeString() }}
          </div>
        </div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__cloudiness">
        <div class="current__cloudiness-icon">
          <img :src="`https://openweathermap.org/img/wn/${data.icon}@2x.png`" alt="" />
        </div>
        <div class="current__cloudiness-title">{{ data.description }}</div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__information">
        <div class="current__information-data" v-for="(items, i) in data.information" :key="items.title">
          <div class="current__imformation-icon">
            <img :src="data.information[i].icon" alt="" />
          </div>
          <div class="current__imformation-template">
            {{ data.information[i].template }}
          </div>
          <div class="current__imformation-title">
            {{ data.information[i].title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { loadCurrentWeather } from "@/api/currentWeatherService";
import { ICurrentWeather } from "@/models/currentWeatherService.interface";
import { formatTemperature } from "@/utils/formatTemperature";
import { onBeforeMount, ref } from "vue";
const data = ref<ICurrentWeather>();
onBeforeMount(async () => {
  data.value = await loadCurrentWeather();
})
</script>
<style lang="scss" scoped>
@import "@/assets/styles/CardCurrentWeather.scss";
</style>
