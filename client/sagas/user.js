import axios from 'axios';
import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';
import { LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_IN_REQUEST,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_SUCCESS } from '../reducers/user';

// <- 이 부분에 리듀서에서 가져올 요청을 임포트한다.
// import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';

// function signUpAPI() {
// return axios.get('http://localhost:3065/user')
// }

function loadMyInfoAPI() {
  return axios.get('/user'); // get요청은 data를 안보냄
}

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  // const { me } = useSelector((state) => state.user);
  // if (me) { console.log(me); }
  return axios.post('/user/login', data);
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    // console.log(result);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// 아래는 백엔드에서 가져올 API를 넣어준다.
// function addPostAPI(data) {
//   return axios.post('/api/post', data);
// }

// 아래 함수는 요청이 일어나면 실행될 함수를 넣어준다.
// function* addPost(action) {
//   try {
//     // const result = yield call(addPostAPI, action.data)
//     yield delay(1000);
//     const id = shortId.generate();
//     yield put({
//       type: ADD_POST_SUCCESS, // post 리듀서 바꾸기
//       data: {
//         id,
//         content: action.data,
//       },
//     });
//     yield put({
//       type: ADD_POST_TO_ME, // user 리듀서 바꾸기
//       data: id,
//     });
//   } catch (err) {
//     yield put({
//       type: ADD_POST_FAILURE, // post 리듀서 바꾸기
//       data: err.response.data,
//     });
//   }
// }

// 이 아래는 yield all 배열 안에 있는 fork 요청들을 한번씩 실행한다.
// 요청 실행중 가장최근에 실행된 ADD_POST_REQUEST 요청이 되면, 위에 만든 addpost 함수를 실행한다
// function* watchAddPost() {
//   yield takeLatest(ADD_POST_REQUEST, addPost);
// }
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
