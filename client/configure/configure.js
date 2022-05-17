import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

// // 미들웨어 thunk 3단 고차함수, 액션객체를 함수화해서 시간 지연
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action); // 액션을 실행하기전에 콘솔을 한 번 찍어주는 미들웨어
//   return next(action);
// };

const configure = (context) => {
  console.log(context);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  // 빈 배열을 그대로 넣는게 아니라 만들어 스프레드 형식으로 넣는다. ★ 중요 ★
  const enhancer = process.env.NODE_ENV === 'production'
  // 리덕스의 노드환경이 배포 모드일 때
    ? compose(applyMiddleware(...middlewares)) // Dev툴 연결 안 한 것
    : composeWithDevTools(applyMiddleware(...middlewares)); // Dev툴 연결 한 것
  const store = createStore(reducer, enhancer);
  // enhancer를 파라미터로 받고 인핸서 기능 확장
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configure, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
