/* eslint-disable no-shadow */
export enum ActionTypes {
  setWeatherDataRequest = 'SET_DATA_WEATHER_REQUEST',
  setWeatherDataSuccess = 'SET_DATA_WEATHER_SUCCESS',
  setWeatherDataFailure = 'SET_DATA_WEATHER_FAILURE',
}

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
