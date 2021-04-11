import { Reducer } from 'react';
import { IWeatherState, ActionTypes } from './types';

const INITIAL_STATE: IWeatherState = {
  items: [],
};

const weather: Reducer<IWeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.setWeatherDataRequest:
      return {
        ...state,
      };
    case ActionTypes.setWeatherDataSuccess:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default weather;
