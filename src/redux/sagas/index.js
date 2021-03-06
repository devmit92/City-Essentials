import { all } from 'redux-saga/effects';
import businessesSaga from './businessesSaga';
import userSaga from './userSaga';
import registrationSaga from './registrationSaga';
import loginSaga from './loginSaga';
import communitySaga from './communitySaga';
import topFiveSaga from './topFiveSaga';


export default function* rootSaga() {
    yield all([
      businessesSaga(),
      userSaga(),
      registrationSaga(),
      loginSaga(),
      communitySaga(),
      topFiveSaga(),

    ]);
  }