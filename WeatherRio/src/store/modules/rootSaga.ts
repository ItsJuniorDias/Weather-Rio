import { all } from 'redux-saga/effects';

import weather from './weather/sagas';

export default function* rootSaga() {
  // yield -> ja que o * seria o async, o yield seria o await
  return yield all([weather]);
}
