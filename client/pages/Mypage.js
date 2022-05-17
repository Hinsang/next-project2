import React, { useState, useEffect } from 'react';
import About1 from '../components/About1';

const MyPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [textDone, setTextDone] = useState(false);
  const sentence = '포트폴리오 사용기술';
  useEffect(() => {
    const typing = setInterval(() => {
      setText(text + sentence[count]);
      setCount(count + 1);
    }, 200);
    if (sentence.length === count) {
      clearInterval(typing);
      setTimeout(() => {
        setTextDone(true);
      }, 1000);
    }
    return () => {
      clearInterval(typing);
    };
  });
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <h2 className="text" style={{ marginBottom: '40px' }}>{ text }</h2>
      {textDone
        ? (
          <div>
            <h4>React, next, redux, saga, express, antd, styled-component, sequalize, mySQL 등을 사용하여
              회원가입, 유효성검사, 로그인 API기능을 추가하고, 서버사이드랜더링 기능을 추가하고, cors에러를 해결하며 airbnb 문법으로 코드를 작성하였습니다.
              MySQL 연동은 제가 신용카드가 없어서 배포할때 연동할 수 없었습니다.
            </h4>
            <h2 style={{ marginTop: 100 }}>현재 기술 스택</h2>
            <About1 />
          </div>
        )
        : <div />}
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default MyPage;
