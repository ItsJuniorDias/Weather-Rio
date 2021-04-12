import { IState } from './../../index';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  setWeatherDataFailure,
  setWeatherDataRequest,
  setWeatherDataSuccess,
} from './actions';

import { ActionTypes } from './types';

import { IWeatherState } from '../weather/types';

import api from '../../../services/api';
import { AxiosResponse } from 'axios';

type SetWeatherDataRequest = ReturnType<typeof setWeatherDataRequest>;

function* setWeatherDataSaga() {
  try {
    const responseData: AxiosResponse = yield call(
      api.get,
      '/weather?q=Sao%20Paulo&appid=cab0b063b14e7ebbff4cfbde7816ba52',
    );

    yield put(setWeatherDataSuccess(responseData.data));
  } catch (e) {
    yield put(setWeatherDataFailure());
  }
}

export default all([
  takeLatest(ActionTypes.setWeatherDataRequest, setWeatherDataSaga),
]);
