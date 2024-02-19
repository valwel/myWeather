import axios from "axios";
import { IForecastResponse } from "@/models/openWeatherMapForecast.interface";
import {
  IDaysForecast,
  IForecastData,
  IHourlyForecast,
} from "@/models/forecastService.interface";
import { formatTimeFromTimestamp } from "@/utils/formatTimeFromTimestamp";

const formatterDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "short",
});

interface IForecastParams {
  q?: string;
  units?: string;
  lat?: string;
  lon?: string;
}

const mapDaysForecast = (list: IForecastResponse['list']): IDaysForecast[] => ([
  {
    id: 0,
    icon: list[1].weather[0].icon,
    temperature: list[1].main.temp,
    date: formatterDate.format(new Date(list[1].dt_txt)),
  },
  {
    id: 1,
    icon: list[9].weather[0].icon,
    temperature: list[9].main.temp,
    date: formatterDate.format(new Date(list[9].dt_txt)),
  },
  {
    id: 2,
    icon: list[17].weather[0].icon,
    temperature: list[17].main.temp,
    date: formatterDate.format(new Date(list[17].dt_txt)),
  },
  {
    id: 3,
    icon: list[25].weather[0].icon,
    temperature: list[25].main.temp,
    date: formatterDate.format(new Date(list[25].dt_txt)),
  },
  {
    id: 4,
    icon: list[33].weather[0].icon,
    temperature: list[33].main.temp,
    date: formatterDate.format(new Date(list[33].dt_txt)),
  }
]);

const mapHourlyForecast = (list: IForecastResponse['list'], timezone: number): IHourlyForecast[] => ([
  {
    id: 0,
    time: formatTimeFromTimestamp(list[0].dt, timezone),
    icon: list[0].weather[0].icon,
    temperature: list[0].main.temp,
    windDeg: list[0].wind.deg,
    windSpeed: Math.round(list[0].wind.speed) + "km/h",
  },
  {
    id: 1,
    time: formatTimeFromTimestamp(list[1].dt, timezone),
    icon: list[1].weather[0].icon,
    temperature: list[1].main.temp,
    windDeg: list[1].wind.deg,
    windSpeed: Math.round(list[1].wind.speed) + "km/h",
  },
  {
    id: 2,
    time: formatTimeFromTimestamp(list[2].dt, timezone),
    icon: list[2].weather[0].icon,
    temperature: list[2].main.temp,
    windDeg: list[2].wind.deg,
    windSpeed: Math.round(list[2].wind.speed) + "km/h",
  },
  {
    id: 3,
    time: formatTimeFromTimestamp(list[3].dt, timezone),
    icon: list[3].weather[0].icon,
    temperature: list[3].main.temp,
    windDeg: list[3].wind.deg,
    windSpeed: Math.round(list[3].wind.speed) + "km/h",
  },
  {
    id: 4,
    time: formatTimeFromTimestamp(list[4].dt, timezone),
    icon: list[4].weather[0].icon,
    temperature: list[4].main.temp,
    windDeg: list[4].wind.deg,
    windSpeed: Math.round(list[4].wind.speed) + "km/h",
  },
])

export async function loadForecast(
  params: IForecastParams = { q: "London" }
): Promise<IForecastData | never> {
  try {
    const forecastParams = {
      ...params,
      units: "metric",
      appid: "7101a34a43712eb87a1af72089076da3",
    };
    const forecastResponse = await axios.get<IForecastResponse>(
      "https://api.openweathermap.org/data/2.5/forecast",
      { params: forecastParams }
    );
    const { list, city } = forecastResponse.data;
    const daysForecast = mapDaysForecast(list);
    const hourlyForecast = mapHourlyForecast(list, city.timezone);
    return {
      daysForecast, hourlyForecast
    }
  } catch (error) {
    console.error(error);
    throw Error('ошибка')
  }
}
