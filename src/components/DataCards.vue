<template>
  <div class="cards">
    <template v-if="getCurrentWeather">
      <div class="cards__wrapper">
        <CardTemplate>
          <CardTime />
        </CardTemplate>
        <CardTemplate>
          <CardCurrentWeather />
        </CardTemplate>
      </div>
      <div class="cards__wrapper">
        <CardTemplate>
          <CardDaysForecast />
        </CardTemplate>
        <CardTemplate>
          <CardHourlyForecast />
        </CardTemplate>
      </div>
    </template>
    <div v-else class="cards__wrapper">
      <CardTemplate style="width: 300px; height: 200px;">
        Данные не найдены
      </CardTemplate>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardTemplate from '@/ui/cards/CardTemplate.vue';
import CardTime from '@/ui/cards/CardTime.vue';
import CardCurrentWeather from '@/ui/cards/CardCurrentWeather.vue';
import CardDaysForecast from '@/ui/cards/CardDaysForecast.vue';
import CardHourlyForecast from '@/ui/cards/CardHourlyForecast.vue';
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/store/weatherStore';

const store = useWeatherStore();
const { getCurrentWeather } = storeToRefs(store);
</script>
<style lang="scss" scoped>
.cards {
  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 50px;
  }
}
</style>