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
    const { sys, main, weather, wind, name, timezone, dt } = currentWeatherResponse.data
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
      timezone: timezone,
      date: dt,
      uv: 1,
      information: [
        {
          icon: "./humidity.svg",
          secondaryIcon: "./humidityDark.svg",
          template: main.humidity + "%",
          title: "Humidity",
        },
        {
          icon: "./wind.svg",
          secondaryIcon: "./windDark.svg",
          template: wind.speed + "m/s",
          title: "Wind Speed",
        },
        {
          icon: "./pressure.svg",
          secondaryIcon: "./pressureDark.svg",
          template: main.pressure + "hPa",
          title: "Pressure",
        },
        {
          icon: "./uv.svg",
          secondaryIcon: "./uvDark.svg",
          template: "1",
          title: "UV",
        },
      ]
    };
  } catch (error) {
    console.error(error);
  }
}
