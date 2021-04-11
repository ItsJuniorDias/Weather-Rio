import { Reducer } from 'react';
import { IWeatherState } from './types';

const INITIAL_STATE: IWeatherState = {
  items: [],
};

const weather: Reducer<IWeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case action.type === 'SET_DATA_WEATHER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weather;
