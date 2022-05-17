import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styles from '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const sentence = 'Nextjs 홈페이지입니다.';
  useEffect(() => {
    const typing = setInterval(() => {
      setText(text + sentence[count]);
      setCount(count + 1);
    }, 150);
    if (sentence.length === count) {
      clearInterval(typing);
    }
    return () => {
      clearInterval(typing);
    };
  });
  return (
    <div className={styles.container}>
      <ToastContainer />
      <h2 style={{ width: '950px', margin: '0 auto' }}>{ text }</h2>
      {/* <h4 style={{ width: '950px', margin: '0 auto' }}>
      사용기술 : React, next, redux, saga, express, mongoose, antd, styled-component, mongoDB 등을 사용하여
      회원가입, 유효성검사, 로그인 API기능을 추가하고, cors에러를 해결하며 airbnb 문법으로 코드를 작성하였습니다.</h4> */}
    </div>
  );
}
