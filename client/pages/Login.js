import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// import Router from 'next/router';
// import Router from 'next/router';
import Router from 'next/router';
import { loginRequestAction, SIGN_UP_RESET, SIGN_UP_SUCCESS } from '../reducers/user';

const Login = () => {
  const { logInDone, logInLoading, logInError } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  useEffect(() => {
    if (logInError) {
      // eslint-disable-next-line no-alert
      alert(logInError);
      dispatch({
        type: SIGN_UP_RESET,
        // logInError를 초기화해줌
      });
    }
  }, [logInError]);
  // 리듀서로 action.error를 받아서 서버 에러 출력☆
  // 회원가입 직후 상태일 때, 같은 logInError를 또다시 출력하므로
  // SIGN_UP_REQUEST 리듀서에서 logInError를 null로 변경해주었음

  useEffect(() => {
    if (logInDone) {
      Router.push('/');
      console.log(logInDone);
      dispatch({
        type: SIGN_UP_SUCCESS,
        // 로그인 상태일때, 회원가입창 못가게 만들어줌.
      });
    }
  }, [logInDone]);

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ nickname, password }));
    console.log(nickname, password);
  }, [nickname, password]);

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <div style={{ margin: 20 }} />
      <Form onFinish={onSubmitForm} style={{ margin: 20 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input name="user-id" value={nickname} onChange={onChangeId} required />
        </div>
        <div style={{ marginTop: '5px' }}>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <Button style={{ marginTop: 15 }} htmlType="submit" loading={logInLoading}>로그인</Button>
          &nbsp;&nbsp;
          <Link href="/Signup"><a><Button>회원가입</Button></a></Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
