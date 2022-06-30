import React, { useEffect, useState } from 'react';
import Introduce1 from '../components/Introduce1';

const Introduce = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [textDone3, setTextDone] = useState(false);
  const sentence = '안녕하세요.';
  useEffect(() => {
    const typing = setInterval(() => {
      setText(text + sentence[count]);
      setCount(count + 1);
    }, 100);
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
      <div className="text" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px' }}>{ text }</div>
      {textDone3
        ? <Introduce1 />
        : <div />}
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default Introduce;
