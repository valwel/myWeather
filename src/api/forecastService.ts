import axios from "axios";
import { IForecastResponse, IList } from "@/models/openWeatherMapForecast.interface";
import {
  IDaysForecast,
  IForecastData,
  IHourlyForecast,
} from "@/models/forecastService.interface";
// const forecastResponse = await fetch(
//   "https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&cnt=40&appid=985a918ee9cbf5a7a7a4742eec58cc08"
// );
// const forecastData = await forecastResponse.json();
// // console.log(forecastData);

const formatterDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "short",
});
const formatterTime = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
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

const mapHourlyForecast = (list: IForecastResponse['list']): IHourlyForecast[] => ([
  {
    id: 0,
    time: formatterTime.format(new Date(list[0].dt_txt)),
    icon: list[0].weather[0].icon,
    temperature: list[0].main.temp,
    windDeg: list[0].wind.deg,
    windSpeed: Math.round(list[0].wind.speed) + "km/h",
  },
  {
    id: 1,
    time: formatterTime.format(new Date(list[1].dt_txt)),
    icon: list[1].weather[0].icon,
    temperature: list[1].main.temp,
    windDeg: list[1].wind.deg,
    windSpeed: Math.round(list[1].wind.speed) + "km/h",
  },
  {
    id: 2,
    time: formatterTime.format(new Date(list[2].dt_txt)),
    icon: list[2].weather[0].icon,
    temperature: list[2].main.temp,
    windDeg: list[2].wind.deg,
    windSpeed: Math.round(list[2].wind.speed) + "km/h",
  },
  {
    id: 3,
    time: formatterTime.format(new Date(list[3].dt_txt)),
    icon: list[3].weather[0].icon,
    temperature: list[3].main.temp,
    windDeg: list[3].wind.deg,
    windSpeed: Math.round(list[3].wind.speed) + "km/h",
  },
  {
    id: 4,
    time: formatterTime.format(new Date(list[4].dt_txt)),
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
    const { list } = forecastResponse.data;
    const daysForecast = mapDaysForecast(list);
    const hourlyForecast = mapHourlyForecast(list);
    return {
      daysForecast, hourlyForecast
    }
  } catch (error) {
    console.error(error);
    throw Error('ошибка')
  }
}

// export const daysForecast: IDaysForecast[] = [
//   {
//     id: 0,
//     icon: forecastData.list[1].weather[0].icon,
//     temperature: forecastData.list[1].main.temp,
//     date: formatterDate.format(new Date(forecastData.list[1].dt_txt)),
//   },
//   {
//     id: 1,
//     icon: forecastData.list[9].weather[0].icon,
//     temperature: forecastData.list[9].main.temp,
//     date: formatterDate.format(new Date(forecastData.list[9].dt_txt)),
//   },
//   {
//     id: 2,
//     icon: forecastData.list[17].weather[0].icon,
//     temperature: forecastData.list[17].main.temp,
//     date: formatterDate.format(new Date(forecastData.list[17].dt_txt)),
//   },
//   {
//     id: 3,
//     icon: forecastData.list[25].weather[0].icon,
//     temperature: forecastData.list[25].main.temp,
//     date: formatterDate.format(new Date(forecastData.list[25].dt_txt)),
//   },
//   {
//     id: 4,
//     icon: forecastData.list[33].weather[0].icon,
//     temperature: forecastData.list[33].main.temp,
//     date: formatterDate.format(new Date(forecastData.list[33].dt_txt)),
//   },
// ];

// export const hourlyForecast: IHourlyForecast[] = [
//   {
//     id: 0,
//     time: formatterTime.format(new Date(forecastData.list[0].dt_txt)),
//     icon: forecastData.list[0].weather[0].icon,
//     temperature: forecastData.list[0].main.temp,
//     windDeg: forecastData.list[0].wind.deg,
//     windSpeed: Math.round(forecastData.list[0].wind.speed) + "km/h",
//   },
//   {
//     id: 1,
//     time: formatterTime.format(new Date(forecastData.list[1].dt_txt)),
//     icon: forecastData.list[1].weather[0].icon,
//     temperature: forecastData.list[1].main.temp,
//     windDeg: forecastData.list[1].wind.deg,
//     windSpeed: Math.round(forecastData.list[1].wind.speed) + "km/h",
//   },
//   {
//     id: 2,
//     time: formatterTime.format(new Date(forecastData.list[2].dt_txt)),
//     icon: forecastData.list[2].weather[0].icon,
//     temperature: forecastData.list[2].main.temp,
//     windDeg: forecastData.list[2].wind.deg,
//     windSpeed: Math.round(forecastData.list[2].wind.speed) + "km/h",
//   },
//   {
//     id: 3,
//     time: formatterTime.format(new Date(forecastData.list[3].dt_txt)),
//     icon: forecastData.list[3].weather[0].icon,
//     temperature: forecastData.list[3].main.temp,
//     windDeg: forecastData.list[3].wind.deg,
//     windSpeed: Math.round(forecastData.list[3].wind.speed) + "km/h",
//   },
//   {
//     id: 4,
//     time: formatterTime.format(new Date(forecastData.list[4].dt_txt)),
//     icon: forecastData.list[4].weather[0].icon,
//     temperature: forecastData.list[4].main.temp,
//     windDeg: forecastData.list[4].wind.deg,
//     windSpeed: Math.round(forecastData.list[4].wind.speed) + "km/h",
//   },
// ];
