import { all } from 'redux-saga/effects';
import businessesSaga from './businessesSaga';
import userSaga from './userSaga';
import registrationSaga from './registrationSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
    yield all([
      businessesSaga(),
      userSaga(),
      registrationSaga(),
      loginSaga(),

    ]);
  }