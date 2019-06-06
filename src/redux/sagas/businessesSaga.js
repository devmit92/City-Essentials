import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchBusinesses() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/businesses', config);
    
    yield put({ type: 'SET_BUSINESSES', payload: response.data });
  } catch (error) {
    console.log('Businesses get request failed', error);
  }
}

function* businessesSaga() {
  yield takeLatest('FETCH_BUSINESSES', fetchBusinesses);
}

export default businessesSaga;