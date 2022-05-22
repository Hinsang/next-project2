import React, { useState, useEffect } from 'react';
import About1 from '../components/About1';

const MyPage = () =>
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');
  // const [textDone, setTextDone] = useState(false);
  // const sentence = '포트폴리오 사용기술';
  // useEffect(() => {
  //   const typing = setInterval(() => {
  //     setText(text + sentence[count]);
  //     setCount(count + 1);
  //   }, 200);
  //   if (sentence.length === count) {
  //     clearInterval(typing);
  //     setTimeout(() => {
  //       setTextDone(true);
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(typing);
  //   };
  // });
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <h2 className="text" style={{ marginBottom: '40px' }}>포트폴리오 사용기술</h2>
      <div>
        <h4>React, next, redux, saga, express, antd, styled-component, sequalize, mySQL 등을 사용하여
          회원가입, 유효성검사, 로그인 API기능을 추가하고, 서버사이드랜더링 기능을 추가하고, cors에러를 해결하며 airbnb 문법으로 코드를 작성하였습니다.
          AWS에서 ec2로 프론트엔드와 백엔드 서버를 각각 배포하였으며, 우분투에 MySQL을 연동하고, pm2를 사용하였습니다.
        </h4>
        <h2 style={{ marginTop: 100 }}>현재 기술 스택</h2>
        <About1 />
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
export default MyPage;
