import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, SIGN_UP_RESET } from '../reducers/user';

const Errormessage = styled.div`
    color: red;
  `;

function Signup() {
  const signUpDone = useSelector((state) => state.user.signUpDone);
  const signUpLoading = useSelector((state) => state.user.signUpLoading);
  const signUpError = useSelector((state) => state.user.signUpError);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, onChangePasswordCheck] = useInput();

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const onChangeId = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // eslint-disable-next-line consistent-return
  const onSubmit = useCallback(() => {
    try {
      if (nickname.length < 3) {
        return setIdError(true);
      }
      setIdError(false);
      if (password.length < 3) {
        return setPasswordError(true);
      }
      setPasswordError(false);
      if (password !== passwordCheck) {
        return setPasswordCheckError(true);
      }
      setPasswordCheckError(false);
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { nickname, password },
      });
    } catch (err) {
      console.error(err);
    }
  }, [nickname, password, passwordCheck]);

  useEffect(() => {
    if (signUpError) {
      // eslint-disable-next-line no-alert
      alert(signUpError);
    }
  }, [signUpError]);
  // 서버에서 리듀서로 action.err 받아와서 출력☆

  useEffect(() => {
    if (signUpDone) {
      Router.push('/Login');
      dispatch({
        type: SIGN_UP_RESET,
        // 회원가입 완료하고도 로그인 창에서 회원가입 창으로 갈 수 있게 만들어줌
        // logInError를 초기화해줌
      });
    }
  }, [signUpDone]);
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Form onFinish={onSubmit}>
        <label htmlFor="user-id" style={{ marginRight: '5px' }}>아이디</label>
        <Input name="user-id" value={nickname} required onChange={onChangeId} />
        {idError && <Errormessage>아이디는 3자 이상으로 해주세요.</Errormessage>}
        <br />
        <br />
        <label htmlFor="user-password" style={{ marginRight: '5px' }}>비밀번호</label>
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        {passwordError && <Errormessage>비밀번호는 3자 이상으로 해주세요.</Errormessage>}
        <br />
        <br />
        <label htmlFor="user-password" style={{ marginRight: '5px' }}>비밀번호 확인</label>
        <Input name="user-password" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
        {passwordCheckError && <Errormessage>비밀번호가 일치하지 않습니다.</Errormessage>}
        <br />
        <Button style={{ marginTop: '20px' }} type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
      </Form>
    </div>
  );
}

export default Signup;
