export interface IWeather {
  id: number;
  title: string;
  description: string;
  temp: number;
  feelsLike: number;
  wind: number;
  humidity: number;
  visibility: number;
}

export interface IWeatherState {
  items: IWeather[];
}
