import { IState } from './../../index';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { setWeatherData } from './actions';

import { IWeatherState } from '../weather/types';

import api from '../../../services/api';
import { AxiosResponse } from 'axios';

type SetWeatherDataRequest = ReturnType<typeof setWeatherData>;

function* setWeatherDataSaga({ payload }: SetWeatherDataRequest) {
  const responseData: AxiosResponse = yield call(
    api.get,
    '/weather?q=Sao%20Paulo&appid=cab0b063b14e7ebbff4cfbde7816ba52',
  );

  yield put(setWeatherData(responseData.data));
}

export default all([takeLatest('SET_DATA_WEATHER', setWeatherDataSaga)]);
