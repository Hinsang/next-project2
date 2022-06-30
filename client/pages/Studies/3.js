import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies3 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>3. 코딩앙마</div>
      <div style={{ fontSize: '16px', fontWeight: 500 }}>
        JS와 React의 기본과정을 익힐 수 있었다. 리액트 훅을 활용하여 토익 영단어장을 만들었다.
      </div>
    </div>
    <br />
    <div className={styles.s8} style={{ marginRight: 10 }} />
    <div className={styles.s9} style={{ marginRight: 10 }} />
  </div>
);

export default studies3;
