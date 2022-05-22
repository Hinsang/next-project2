import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies7 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <h3>7. 이미지관리 풀스택</h3>
      MERN스택으로 만들었으며, next, saga, redux를 활용해 새롭게 리뉴얼 해보았다.
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s21} style={{ marginRight: 10 }} />
      <div className={styles.s22} style={{ marginRight: 10 }} />
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s23} style={{ marginRight: 10 }} />
      <div className={styles.s24} style={{ marginRight: 10 }} />
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s25} style={{ marginRight: 10 }} />
      <div className={styles.s26} style={{ marginRight: 10 }} />
    </div>
  </div>
);

export default studies7;
