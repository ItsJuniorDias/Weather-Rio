/* eslint-disable no-shadow */
export enum ActionTypes {
  setWeatherDataRequest = 'SET_DATA_WEATHER_REQUEST',
  setWeatherDataSuccess = 'SET_DATA_WEATHER_SUCCESS',
  setWeatherDataFailure = 'SET_DATA_WEATHER_FAILURE',
}

export interface IClouds {
  all: number;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeatherProps {
  feelsLike: number;
  humidity: number;
  pressure: number;
  temp: number;
  tempMax: number;
  tempMin: number;
}

export interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface IWeatherInfos {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IWeather {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IWeather;
  name: string;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: IWeatherInfos[];
  wind: IWind;
}

export interface IWeatherState {
  items: IWeather[];
}
