/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { END } from 'redux-saga';
import Toolbar from '../components/Toolbar';
import wrapper from '../configure/configure';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
// import { LOAD_POSTS_REQUEST } from '../reducers/post';
// import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    // dispatch({
    //   type: LOAD_POSTS_REQUEST,
    // });
  }, []);

  return (
    <>
      <Head>
        <title>NEXT</title>
      </Head>
      <link rel="icon" href="http://localhost:3000/favicon.ico" />
      <meta name="description" content="Generated by create next app" />
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
// eslint-disable-next-line max-len
//   const cookie = context.req ? context.req.headers.cookie : ''; // 서버사이드에서 실행하면 context.req라는 것이 존재함 headers의 cookie를 가져옴
//   axios.defaults.headers.Cookie = '';
//   if (context.req && cookie) {
//     axios.defaults.headers.Cookie = cookie; // 프론트서버에서 백엔드서버로 쿠키전달 (대소문자 주의)
//   } // 다른사람과 쿠키가 공유되는 문제 해결. SSR이 될때만 위에처럼 지웠다 넣었다 해준다.
//   context.store.dispatch({
//     type: LOAD_MY_INFO_REQUEST, // 새로고침때마다 로그인 정보를 불러옴
//   });
//   // context.store.dispatch({
//   //   type: LOAD_POSTS_REQUEST,
//   // });
//   context.store.dispatch(END); // 요청 > 요청 상태가 아닌 요청완료 > ☆요청상태로 넘어가서 서버에서 요청이 완료된 후 보여줌☆
//   // redux-saga에서 { END }를 임포트하고 사용한다.
//   await context.store.sagaTask.toPromise(); // next-redux-wrapper 사용법
// });

export default wrapper.withRedux(MyApp);
