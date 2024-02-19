<template>
  <div class="hourly">
    <h2 class="hourly__title">Hourly Forecast:</h2>
    <div class="hourly__list">
      <ul v-if="getHourlyForecast" class="hourly__items">
        <li v-for="(item, i) in getHourlyForecast" :key="item.id" class="hourly__item" :class="{isNight: getIsNight(item.time)}">
          <div class="hourly__time">{{ getHourlyForecast[i].time }}</div>
          <div class="hourly__icon"><img :src="`https://openweathermap.org/img/wn/${getHourlyForecast[i].icon}@2x.png`"
              alt=""></div>
          <div class="hourly__temperature">{{ formatTemperature(getHourlyForecast[i].temperature) }}</div>
          <div class="hourly__wind"><img :style="`transform: rotate(${getHourlyForecast[i].windDeg + 180}deg)`"
              src="@/assets/images/navigation.svg" alt=""></div>
          <div class="hourly__speed">{{ getHourlyForecast[i].windSpeed }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/store/weatherStore';
import { formatTemperature } from "@/utils/formatTemperature";
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { formatTimeFromTimestamp } from "@/utils/formatTimeFromTimestamp";

const store = useWeatherStore();
const { getHourlyForecast, getCurrentWeather } = storeToRefs(store);

const sunset = computed(() => getCurrentWeather.value ? formatTimeFromTimestamp(getCurrentWeather.value.sunset, getCurrentWeather.value.timezone).substring(0,2) : '');
const sunrise = computed(() => getCurrentWeather.value ? formatTimeFromTimestamp(getCurrentWeather.value.sunrise, getCurrentWeather.value.timezone).substring(0,2) : '');
function getIsNight(time: string) {
  if (!getCurrentWeather.value) return false
  return +sunset.value < +time.split(':')[0] || +sunrise.value > +time.split(':')[0]
}
</script>
<style lang="scss" scoped>
  // .isNight {
  //   background: linear-gradient(20deg, #fff 0%, #443D64 71.82%)
  // }
body.white {
  .hourly {
    &__item {
      background: linear-gradient(20deg, #fff 30%, #F88508 71.82%)
    }
  }
    .isNight {
    background: linear-gradient(20deg, #fff 0%, #443D64 71.82%)
  }
}
.hourly {
  margin: auto;
  width: 100%;

  &__title {
    font-size: 32px;
    text-align: center;
  }

  &__list {
    margin: 10px auto;

    @media (max-width: 1440px) and (min-width: 1025px) {
      overflow-x: auto;
      max-width: 400px;
    }

    @media (max-width: 1024px) {
      overflow-x: auto;
    }
  }

  &__items {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__item {
    padding: 15px 40px;
    background-color: #666;
    border-radius: 40px;

    &:nth-child(n + 2) {
      margin-left: 15px;
    }
  }

  &__time {
    font-size: 24px;
    margin-top: 10px;
    text-align: center;
  }

  &__icon {
    margin-top: 10px;
    max-width: 80px;

    img {
      object-fit: cover;
    }
  }

  &__temperature {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
  }

  &__wind {
    max-width: 80px;
    margin-top: 10px;
  }

  &__speed {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
  }
}
</style>