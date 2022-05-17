import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { END } from 'redux-saga';
import styles from './Toolbar.module.css';
import { LOAD_MY_INFO_REQUEST, logoutRequestAction } from '../reducers/user';
import wrapper from '../configure/configure';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

function Toolbar() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogOutHandler = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div className={styles.inner}>
      <div style={{ height: '10px' }} />
      <Link href="/">
        <span className={styles.title}>
          NEXT
        </span>
      </Link>
      <span>
        <div className={styles.mark} />
      </span>
      {
      me
        ? (
          <span className={styles.toolbar_box}>
            <span onClick={LogOutHandler} aria-hidden="true" className={styles.toolbar}>
              <span style={{ fontSize: '24px' }}>({me.nickname})</span>
              &nbsp;로그아웃
            </span>
          </span>
        )
        : (
          <span>
            <span className={styles.toolbar_box}>
              <Link href="Signup">
                <span className={styles.toolbar}>
                  회원가입
                </span>
              </Link>
            </span>
            <span style={{ float: 'right', marginRight: 10, fontSize: '19px' }}>
              |
            </span>
            <span className={styles.toolbar_box}>
              <Link href="/Login">
                <span className={styles.toolbar}>
                  로그인
                </span>
              </Link>
            </span>
          </span>
        )
      }

      <div className={styles.title_line} />
      <Link href="/">
        <span className={styles.side_toolbar}>Home</span>
      </Link>
      <Link href="/Studies">
        <span className={styles.side_toolbar}>Studies</span>
      </Link>
      <Link href="/Mypage">
        <span className={styles.side_toolbar}>About</span>
      </Link>
      <Link href="/Introduce">
        <span className={styles.side_toolbar}>Introduce</span>
      </Link>
      {/* <Link href="/Board">
        <span className={styles.side_toolbar}>Board</span>
      </Link> */}
      <div className={styles.side_toolbar_line} />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : ''; // 서버사이드에서 실행하면 context.req라는 것이 존재함 headers의 cookie를 가져옴
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 프론트서버에서 백엔드서버로 쿠키전달 (대소문자 주의)
  } // 다른사람과 쿠키가 공유되는 문제 해결. SSR이 될때만 위에처럼 지웠다 넣었다 해준다.
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST, // 새로고침때마다 로그인 정보를 불러옴
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch(END); // 요청 > 요청 상태가 아닌 요청완료 > ☆요청상태로 넘어가서 서버에서 요청이 완료된 후 보여줌☆
  // redux-saga에서 { END }를 임포트하고 사용한다.
  await context.store.sagaTask.toPromise(); // next-redux-wrapper 사용법
});

export default Toolbar;
