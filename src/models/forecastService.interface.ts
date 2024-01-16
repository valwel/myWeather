export interface IDaysForecast {
  id: number,
  icon: string,
  temperature: number,
  date: string,
}

export interface IHourlyForecast {
  id: number,
  time: string,
  icon: string,
  temperature: number,
  windDeg: number,
  windSpeed: string,
}

export interface IForecastData {
  daysForecast: IDaysForecast[],
  hourlyForecast: IHourlyForecast[],
}