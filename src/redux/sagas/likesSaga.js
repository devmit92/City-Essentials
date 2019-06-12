import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchCommunity() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/community', config);

    
    yield put({ type: 'SET_LIKES', payload: response.data });
  } catch (error) {
    console.log('Community get request failed', error);
  }
}

function* postCommunity(action) {
    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };
        const data = {
            content: action.payload
        }

        const response = yield axios.post('/api/community', data, config);

        yield put({ type: 'FETCH_LIKES'});
      } catch (error) {
        console.log('Community get request failed', error);
      }
}

function* communitySaga() {
  yield takeLatest('FETCH_LIKES', fetchCommunity);
  yield takeLatest('POST_LIKES', postCommunity);
}

export default communitySaga;