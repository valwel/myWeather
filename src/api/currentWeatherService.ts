import axios from 'axios';
import { ICurrentWeather } from "@/models/currentWeatherService.interface";
import { ICurrentWeatherResponse } from "@/models/openWeatherMap.interface";

interface ICurrentWeatherParams {
  q?: string,
  units?: string,
  lat?: string,
  lon?: string
}
export async function loadCurrentWeather(params: ICurrentWeatherParams = {q: 'London'}): Promise<
  ICurrentWeather | undefined
> {
  try {
    const currentParams = {...params, units: 'metric', appid: '7101a34a43712eb87a1af72089076da3'}
    const currentWeatherResponse = await axios.get<ICurrentWeatherResponse>(
      "https://api.openweathermap.org/data/2.5/weather", {params: currentParams}
    );
    const { sys, main, weather, wind, name } = currentWeatherResponse.data
    return {
      temp: main.temp,
      feelsLike: main.feels_like,
      sunrise: sys.sunrise,
      sunset: sys.sunset,
      icon: weather[0].icon,
      description: weather[0].description,
      humidity: main.humidity,
      wind: wind.speed,
      pressure: main.pressure,
      city: name,
      uv: 1,
      information: [
        {
          icon: "./humidity.svg",
          template: main.humidity + "%",
          title: "Humidity",
        },
        {
          icon: "./wind.svg",
          template: wind.speed + "m/s",
          title: "Wind Speed",
        },
        {
          icon: "./pressure.svg",
          template: main.pressure + "hPa",
          title: "Pressure",
        },
        {
          icon: "./uv.svg",
          template: "1",
          title: "UV",
        },
      ]
    };
  } catch (error) {
    console.error(error);
  }
}
