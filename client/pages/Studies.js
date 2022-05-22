import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Studies1 from '../components/Studies1';
import styles from '../components/Studies1.module.css';
import StudiesSection from '../components/StudiesSection';

const Studies = () =>
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');
  // const [textDone2, setTextDone2] = useState(false);
  // const sentence = '공부한 내용들';
  // useEffect(() => {
  //   const typing = setInterval(() => {
  //     setText(text + sentence[count]);
  //     setCount(count + 1);
  //   }, 150);
  //   if (sentence.length === count) {
  //     clearInterval(typing);
  //     setTimeout(() => {
  //       setTextDone2(true);
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(typing);
  //   };
  // });
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <StudiesSection />
      {/* <Studies1 /> */}
      <br /><br /><br /><br /><br />
    </div>
  );
export default Studies;
