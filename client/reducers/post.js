// 더미데이터 넣을 때 아래 3개 주석 풀기
// import shortId from 'shortid';
import produce from 'immer';
// import faker from 'faker';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

export const initialState = {
  // 여기에 필요한 스테이트 넣기
  mainPosts: [],
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
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
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADD_POST_RESET = 'ADD_POST_RESET';

export const LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

// export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 이 아래 예제는 사가에서 실행할 함수이다. 타입과 데이터를 합쳐서 사가에 넘겨준다.
// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });

// export const logoutAction = () => ({
//   type: 'LOG_OUT_REQUEST',
// });
// useEffect(() => {
//   const { me } = state.me;
//   if (me) axios.defaults.headers.common.sessionid = me.sessionId;
// }, [me]);

export const postRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  // const { me } = useSelector((state) => state.user);
  switch (action.type) {
    // <- 이 부분에 아래와 같이 draft로 불변성 지키면서 각각의 상태를 고쳐줌
    // case LOAD_POSTS_REQUEST:
    //   draft.loadPostsLoading = true;
    //   draft.loadPostsDone = false;
    //   draft.loadPostsError = null;
    //   break;
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.addPostError = null;
      draft.mainPosts.unshift(action.data);
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostDone = false;
      draft.addPostError = action.error;
      break;
    case ADD_POST_RESET:
      draft.addPostDone = false;
      break;
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.loadPostsError = null;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      break;
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = false;
      draft.loadPostsError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
