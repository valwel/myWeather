import { defineStore } from "pinia";
import { loadCurrentWeather } from "@/api/currentWeatherService";
import { loadForecast } from "@/api/forecastService";
import { ICurrentWeather } from "@/models/currentWeatherService.interface";
import {
  IDaysForecast,
  IHourlyForecast,
} from "@/models/forecastService.interface";

type TWeatherStoreState = {
  currentWeather: ICurrentWeather | null;
  daysForecast: IDaysForecast[] | null;
  hourlyForecast: IHourlyForecast[] | null;
};

export const useWeatherStore = defineStore("weather", {
  state: (): TWeatherStoreState => ({
    currentWeather: null,
    daysForecast: null,
    hourlyForecast: null,
  }),
  actions: {
    async loadCurrentWeatherStore(q = "London") {
      try {
        const res = await loadCurrentWeather({q});
        this.currentWeather = res || null;
      } catch (error) {
        console.error(error);
        this.currentWeather = null;
      }
    },

    async loadForecastStore() {
      try {
        const {daysForecast, hourlyForecast} = await loadForecast();
        this.daysForecast = daysForecast;
        this.hourlyForecast = hourlyForecast;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getCurrentWeather(state) {
      return state.currentWeather;
    },
    getDaysForecast(state) {
      return state.daysForecast;
    },
    getHourlyForecast(state) {
      return state.hourlyForecast;
    }
  },
});
