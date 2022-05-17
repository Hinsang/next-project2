import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';
// <- 여기에 연결할 리듀서 임포트 해오기

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // 서버사이드 랜더링을 위해 HYDRATE를 인덱스에 추가해줌
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
  // post, // post 리듀서 가져와서 넣은 것
  // 이 부분에 임포트한 리듀서 넣기
});

export default rootReducer;

// import { HYDRATE } from 'next-redux-wrapper';
// import { combineReducers } from 'redux';

// import user from './user';

// // (이전상태, 액션) => 다음상태
// const rootReducer = (state, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       console.log('HYDRATE', action);
//       return action.payload;
//     default: {
//       const combinedReducer = combineReducers({
//         user,
//       });
//       return combinedReducer(state, action);
//     }
//   }
// };

// export default rootReducer;
