<template>
  <div v-if="getCurrentWeather" class="card-time">
    <div class="card-time__location">{{ getCurrentWeather.city }}</div>
    <div class="card-time__time">{{ formatterTime.format(time) }}</div>
    <div class="card-time__date">{{ formatterDate.format(date) }}</div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/store/weatherStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const time = new Date();
const formatterTime = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
});
const date = new Date();
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