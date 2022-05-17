import axios from 'axios';
import { put, takeLatest, all, fork, call, throttle } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS } from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

function addPostAPI(data) {
  return axios.post('http://localhost:3065/Board/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    console.log(result);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostsAPI(data) {
  return axios.get('/Board', data);
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
  // 5초에 한번씩만 요청 받게 설정
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPosts),
  ]);
}
