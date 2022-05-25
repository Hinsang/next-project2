// 더미데이터 넣을 때 아래 3개 주석 풀기
// import shortId from 'shortid';
import produce from 'immer';
// import faker from 'faker';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

export const initialState = {
  // 여기에 필요한 스테이트 넣기
  loadMyInfoLoading: false, // 내 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null,
};

// 더미데이터를 무작위로 넣는다면 어래와같이 넣어준다.
// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//   id: shortId.generate(),
//   User: {

//     id: shortId.generate(),
//     nickname: faker.name.findName(),
//   },
//   content: faker.lorem.paragraph(),
//   Images: [{
//     src: faker.image.image(),
//   }],
//   Comments: [{
//     User: {
//       id: shortId.generate(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.sentence(),
//   }],
// }));

// 이 아래 3개는 사가로 익스포트하는 예제. 각각 요청, 성공, 실패의 3가지 변수를 만든다.
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_RESET = 'SIGN_UP_RESET';
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
// 새로고침때마다 로그인 정보 넣어주기

// export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 이 아래 예제는 사가에서 실행할 함수이다. 타입과 데이터를 합쳐서 사가에 넘겨준다.
// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

// export const logoutAction = () => ({
//   type: 'LOG_OUT_REQUEST',
// });
// useEffect(() => {
//   const { me } = state.me;
//   if (me) axios.defaults.headers.common.sessionid = me.sessionId;
// }, [me]);

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  // const { me } = useSelector((state) => state.user);
  switch (action.type) {
    // <- 이 부분에 아래와 같이 draft로 불변성 지키면서 각각의 상태를 고쳐줌
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadUserError = null;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case LOG_IN_REQUEST:
      draft.logInDone = false;
      draft.logInError = null;
      draft.logInLoading = true;
      break;
    case LOG_IN_SUCCESS:
      draft.logInDone = true;
      draft.logInError = null;
      draft.logInLoading = false;
      draft.me = action.data;
      break;
    case LOG_IN_FAILURE:
      draft.logInDone = false;
      draft.logInError = action.error;
      draft.logInLoading = false;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutDone = false;
      draft.logOutError = null;
      draft.logOutLoading = true;
      break;
    case LOG_OUT_SUCCESS:
      // draft.logOutError = null;
      draft.logInDone = false;
      draft.logOutDone = true;
      draft.logOutLoading = false;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutDone = false;
      draft.logOutError = action.err;
      draft.logOutLoading = false;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpDone = false;
      draft.signUpError = null;
      draft.signUpLoading = true;
      draft.logInError = null;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpDone = true;
      draft.signUpError = null;
      draft.signUpLoading = false;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpDone = false;
      draft.signUpError = action.error;
      draft.signUpLoading = false;
      break;
    case SIGN_UP_RESET:
      draft.signUpDone = false;
      draft.logInError = null;
      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({ id: action.data });
      break;
    default:
      break;
  }
});

export default reducer;
