<template>
  <div v-if="getCurrentWeather" class="card-time">
    <div class="card-time__location">{{ getCurrentWeather.city }}</div>
    <div class="card-time__time">{{ formatterTime.format(new Date(new Date().setHours(new Date().getUTCHours()) + getCurrentWeather.timezone * 1000)) }}</div>
    <div class="card-time__date">{{ formatterDate.format(new Date(getCurrentWeather.date * 1000)) }}</div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/store/weatherStore';
import { storeToRefs } from 'pinia';

const formatterTime = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
});
const formatterDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "short",
});
const store = useWeatherStore();
const { getCurrentWeather } = storeToRefs(store);
console.log(getCurrentWeather)
</script>
<style lang="scss" scoped>
.card-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__location {
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0em;
  }

  &__time {
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
    letter-spacing: 0em;

    @media (max-width: 1150px) and (min-width: 1025px) {
      font-size: 50px;
    }
  }

  &__date {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
  }
}

</style>