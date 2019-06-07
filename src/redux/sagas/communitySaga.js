import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchCommunity() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/community', config);
    
    yield put({ type: 'SET_COMMUNITY', payload: response.data });
  } catch (error) {
    console.log('Community get request failed', error);
  }
}

function* communitySaga() {
  yield takeLatest('FETCH_COMMUNITY', fetchCommunity);
}

export default communitySaga;