export interface ICurrentWeather {
  temp: number;
  feelsLike: number;
  sunrise: number;
  sunset: number;
  icon: string;
  description: string;
  humidity: number;
  wind: number;
  pressure: number;
  city: string;
  timezone: number;
  date: number;
  uv: number;
  information: IInformation[]
}

export interface IInformation {
  icon: string;
  secondaryIcon: string;
  template: string;
  title: string;
}
