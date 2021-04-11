import { IWeather } from './types';

export function setWeatherData(items: IWeather) {
  return {
    type: 'SET_DATA_WEATHER',
    payload: {
      items,
    },
  };
}
