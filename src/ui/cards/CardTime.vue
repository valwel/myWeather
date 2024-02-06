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
@import "@/assets/styles/CardTime.scss";
</style>