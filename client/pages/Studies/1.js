import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies1 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <h3>1. 생활코딩</h3>
      맨처음에 코딩을 배우기 위해서 시작한 강의, HTML, CSS, JS, Nodejs등의 기초를 배웠다.
      이를 활용해 야간모드전환, 유튜브첨부, 디스커스 채팅기능, 메모기능 등을 추가해보았다.
      <br />
      <div className={styles.s1} style={{ marginTop: 10, marginRight: 10 }} />
      <div className={styles.s2} style={{ marginRight: 10 }} />
      <div className={styles.s3} />
    </div>
  </div>
);

export default studies1;
