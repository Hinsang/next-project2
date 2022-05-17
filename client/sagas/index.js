import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import postSaga from './post';

// axios.defaults.baseURL = 'https://next-project-1.herokuapp.com';
axios.defaults.withCredentials = true;
// 서로 다른 도메인에서 credentials로 쿠키 전송을 원할하게 해줌

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}
