import { IWeather } from './types';

export function setWeatherDataRequest() {
  return {
    type: 'SET_DATA_WEATHER_REQUEST',
    payload: {},
  };
}

export function setWeatherDataSuccess(items: IWeather) {
  return {
    type: 'SET_DATA_WEATHER_SUCCESS',
    payload: {
      items,
    },
  };
}

export function setWeatherDataFailure() {
  return {
    type: 'SET_DATA_WEATHER_FAILURE',
    payload: {},
  };
}
