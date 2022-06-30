import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { END } from 'redux-saga';
import styles from './Toolbar.module.css';
import { logoutRequestAction } from '../reducers/user';
// import wrapper from '../configure/configure';
// import { LOAD_POSTS_REQUEST } from '../reducers/post';

function Toolbar() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogOutHandler = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div className={styles.inner}>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}

      <div style={{ height: '10px' }} />
      <Link href="/">
        {/* <span className={styles.title}>
          NEXT
        </span> */}
        <div className={styles.toolbar_title} />
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
              <Link href="/Signup">
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
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />

      <Link href="/">
        <span className={styles.side_toolbar}>Home</span>
      </Link>
      {/* <Link href="/Board/Post">
        <span className={styles.side_toolbar}>Board</span>
      </Link> */}
      <Link href="/Studies">
        <span className={styles.side_toolbar}>Studies</span>
      </Link>
      <Link href="/Mypage">
        <span className={styles.side_toolbar}>About</span>
      </Link>
      <Link href="/Introduce">
        <span className={styles.side_toolbar}>Introduce</span>
      </Link>
      <Link href="/Board">
        <span className={styles.side_toolbar}>Board</span>
      </Link>
      <div className={styles.side_toolbar_line} />
    </div>
  );
}

export default Toolbar;
