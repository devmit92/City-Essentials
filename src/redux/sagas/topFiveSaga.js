import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchBusinesses() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/businesses/top-five', config);
    
    yield put({ type: 'SET_FIVE', payload: response.data });
  } catch (error) {
    console.log('Businesses get request failed', error);
  }
}

function* topFiveSaga() {
    yield takeLatest('FETCH_FIVE', fetchBusinesses);
}

export default topFiveSaga;