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
            <img v-if="mode.isDark" src="@/assets/images/sunrise.svg" alt="" />
            <img v-else src="@/assets/images/sunriseWhite.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunrise</div>
          <div class="current__sun-time">
            {{ new Date(getCurrentWeather.sunrise * 1000 + getCurrentWeather.timezone * 1000).toUTCString().substr(-12, 8) }}
          </div>
        </div>
        <div class="current__sun-sunrise">
          <div class="current__sun-icon">
            <img v-if="mode.isDark" src="@/assets/images/sunset.svg" alt="" />
            <img v-else src="@/assets/images/sunsetWhite.svg" alt="" />
          </div>
          <div class="current__sun-title">Sunset</div>
          <div class="current__sun-time">
            {{ new Date(getCurrentWeather.sunset * 1000 + getCurrentWeather.timezone * 1000).toUTCString().substr(-12, 8) }}
          </div>
        </div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__cloudiness">
        <div class="current__cloudiness-icon">
          <img :src="`https://openweathermap.org/img/wn/${getCurrentWeather.icon}@4x.png`" alt="" />
        </div>
        <div class="current__cloudiness-title">{{ getCurrentWeather.description }}</div>
      </div>
    </div>
    <div class="current__wrapper">
      <div  class="current__information">
        <div class="current__information-data" v-for="(item, i) in getCurrentWeather.information" :key="item.title">
          <div class="current__information-icon">
            <img  :src="getCurrentWeather.information[i][getMode ? 'icon' : 'secondaryIcon']" alt="" />
          </div>
          <div class="current__information-template">
            {{ getCurrentWeather.information[i].template }}
          </div>
          <div class="current__information-title">
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
import { modeStore } from "@/store/modeStore";

const mode = modeStore();
const { getMode } = storeToRefs(mode);
const store = useWeatherStore();
const { getCurrentWeather } = storeToRefs(store);

console.log(getCurrentWeather)
</script>
<style lang="scss" scoped>
.current {
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;

  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // &__temperature {
    // background: linear-gradient(
    //   45deg,
    //   rgba(255, 255, 255, 1),
    //   rgba(255, 255, 255, 0)
    // );
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  // }

  &__temperature-now {
    font-size: 40px;
    white-space: nowrap;
    text-align: center;
  }

  &__temperature-feels {
    font-size: 20px;

    span {
      font-size: 32px;
    }
  }

  &__sun {
    margin-top: 40px;
  }

  &__sun-sunrise {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 48px 90px;
    grid-template-rows: auto auto;
    gap: 4px 10px;
    &:nth-child(n + 2) {
      margin-top: 19px;
    }
  }

  &__sun-icon {
    grid-row: span 2;
    max-width: 48px;
    max-height: 48px;
    img {
      width: 100%;
      object-fit: none;
    }
  }

  &__sun-title {
    font-size: 20px;
  }

  &__sun-time {
    font-size: 16px;
  }

  &__cloudiness-icon {
    width: 224px;
    height: 224px;
  }

  &__cloudiness-title {
    font-size: 32px;
    text-align: center;
  }

  &__information {
    display: grid;
    grid-template-columns: 110px 110px;
    grid-template-rows: 135px  135px;
    gap: 13px;
  }

  &__information-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  &__information-template {
    margin: 10px 0;
  }
}

</style>
